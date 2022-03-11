'use strict';

// prettier-ignore

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

//
//

class Workout {
  date = new Date();
  id = (Date.now() + '').slice(-10);
  clicks = 0;
  constructor(distance, duration, coords) {
    this.distance = distance; //km
    this.duration = duration; //min
    this.coords = coords; //[latitude, longitude]
  }

  _renderWorkoutTitle(workout) {
    // let icon = '';
    // if (this.type === 'running') icon = '🏃';
    // if (this.type === 'cycling') icon = '🚴‍♀️';
    //prettier-ignore
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    this.workoutTitle =
      this.type[0].toUpperCase() +
      this.type.slice(1) +
      ' ' +
      ' on ' +
      this.date.getDate() +
      ' ' +
      months[this.date.getMonth()];

    return this.workoutTitle;
  }

  // click() {
  //   this.clicks++;
  // }
}

class Running extends Workout {
  type = 'running';
  constructor(distance, duration, coords, cadence) {
    super(distance, duration, coords);
    this.cadence = cadence;
    this._renderWorkoutTitle();
    this.calcPace();
  }

  calcPace() {
    this.pace = (this.duration / this.distance).toFixed(1);
    return this.pace;
  }
}

class Cycling extends Workout {
  type = 'cycling';
  constructor(distance, duration, coords, elevation) {
    super(distance, duration, coords);
    this.elevation = elevation;
    this.calcSpeed();
    this._renderWorkoutTitle();
  }
  calcSpeed() {
    this.speed = (this.distance / (this.duration / 60)).toFixed(1); // IN KM/H
    return this.speed;
  }
}

//
//

class App {
  #map;
  #mapEvent;
  #dataWorkouts = [];

  constructor() {
    //getting position
    this._getPosition();

    //saving data in local storage
    this._getDataLocal();

    //adding event listners
    form.addEventListener('submit', this._newWorkout.bind(this));
    inputType.addEventListener('change', this._adjustRunningCycling);
    containerWorkouts.addEventListener('click', this.moveToPopup.bind(this));
  }

  _getPosition() {
    if (navigator.geolocation)
      navigator.geolocation.getCurrentPosition(
        this._loadMap.bind(this),
        function () {
          alert('Location cannot be fetched');
        }
      );
  }

  _loadMap(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coords = [latitude, longitude];
    console.log(
      `https://www.google.com/maps/@${latitude},${longitude},18.35z/data=!5m1!1e4`
    );

    this.#map = L.map('map', {
      maxZoom: 18,
      minZoom: 13,
    }).setView(coords, 13);

    this.#map.setZoom(17);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);

    this.#map.on('click', this._showForm.bind(this));

    ////Deals with clicks on map//
    const circle = L.circle(coords, {
      color: '#2b282883',
      fillColor: '##d16882',
      fillOpacity: 0.5,
      radius: 50,
    }).addTo(this.#map);

    this.#dataWorkouts.forEach(work => this._renderWorkoutMarker(work));
  }

  _showForm(mapE) {
    this.#mapEvent = mapE;
    //console.log(mapE);
    form.classList.remove('hidden');
    inputDistance.focus();
  }

  _adjustRunningCycling() {
    inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
    inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
  }

  _newWorkout(event) {
    event.preventDefault();
    const { lat, lng } = this.#mapEvent.latlng;

    const helperValidInput = (...inputs) =>
      inputs.every(inp => Number.isFinite(inp));

    const helperAllPositives = (...inputs) => inputs.every(inp => inp > 0);

    //get data from form
    const type = inputType.value;
    const distance = +inputDistance.value;
    const duration = +inputDuration.value;
    const cadence = +inputCadence.value;
    let workout;

    //if workout is running , create running object
    if (type == 'running') {
      if (
        //check if data is valid
        !helperValidInput(distance, duration, cadence) ||
        !helperAllPositives(distance, duration, cadence)
      )
        return alert('please enter valid inputs');

      //

      workout = new Running(distance, duration, [lat, lng], cadence);
      this.#dataWorkouts.push(workout);
    }

    //if workout is cycling , create cycling object
    if (type == 'cycling') {
      const elevation = +inputElevation.value;
      if (
        //check if data is valid
        !helperValidInput(distance, duration, elevation) ||
        !helperAllPositives(distance, duration)
      )
        return alert('please enter valid inputs');

      //

      workout = new Cycling(distance, duration, [lat, lng], elevation);
      this.#dataWorkouts.push(workout);
    }

    //render workout marker on map as marked
    this._renderWorkoutMarker(workout);

    //render workout
    this._renderWorkout(workout);

    //removing values from form and hide form
    this._hidingForm();

    this._setDataLocal();
  }

  _hidingForm() {
    inputDistance.value = inputCadence.value = inputDuration.value = inputElevation.value =
      '';
    inputDistance.focus();
    form.classList.add('hidden');
  }

  _renderWorkoutMarker(workout) {
    L.marker(workout.coords)
      .addTo(this.#map)
      .bindPopup(
        L.popup({
          maxWidth: 300,
          minWidth: 100,
          autoClose: false,
          closeOnClick: false,
          className: `${workout.type}-popup`,
        })
      )
      .setPopupContent(
        `${workout.type === 'running' ? '🏃' : '🚴‍♀️'}  ${
          ' ' + workout.workoutTitle
        }`
      )
      .openPopup();
  }

  _renderWorkout(workout) {
    let html = `
    <li class="workout workout--${workout.type}" data-id="${workout.id}">
          <h2 class="workout__title">${workout.workoutTitle}</h2>
          <div class="workout__details">
            <span class="workout__icon">${
              workout.type === 'running' ? '🏃‍' : '🚴‍♀️'
            }</span>
            <span class="workout__value">${workout.distance}</span>
            <span class="workout__unit">km</span>
          </div>
          <div class="workout__details">
            <span class="workout__icon">⏱</span>
            <span class="workout__value">${workout.duration}</span>
            <span class="workout__unit">min</span>
          </div>`;

    if (workout.type === 'running')
      html += ` <div class="workout__details">
            <span class="workout__icon">⚡️</span>
            <span class="workout__value">${workout.pace}</span>
            <span class="workout__unit">min/km</span>
          </div>
          <div class="workout__details">
            <span class="workout__icon">🦶🏼</span>
            <span class="workout__value">${workout.cadence}</span>
            <span class="workout__unit">spm</span>
          </div>
        </li>`;

    if (workout.type === 'cycling')
      html += ` <div class="workout__details">
            <span class="workout__icon">⚡️</span>
            <span class="workout__value">${workout.speed}</span>
            <span class="workout__unit">km/h</span>
          </div>
          <div class="workout__details">
            <span class="workout__icon">⛰</span>
            <span class="workout__value">${workout.elevation}</span>
            <span class="workout__unit">m</span>
          </div>
          </li>`;

    form.insertAdjacentHTML('afterend', html);
    console.log(workout);
  }

  moveToPopup(e) {
    const workoutEl = e.target.closest('.workout');
    //console.log(workoutEl);
    if (!workoutEl) return;

    const workout = this.#dataWorkouts.find(
      work => work.id === workoutEl.dataset.id
    );

    this.#map.setView(workout.coords);
    //console.log(workout.coords, { animate: true, pan: { duration: 1 } });
    //workout.click();
  }

  _setDataLocal() {
    localStorage.setItem('key', JSON.stringify(this.#dataWorkouts));
    console.log(this.#dataWorkouts);
  }
  _getDataLocal() {
    const data = JSON.parse(localStorage.getItem('key'));
    //console.log(data);
    if (!data) return;

    this.#dataWorkouts = data;

    this.#dataWorkouts.forEach(work => {
      this._renderWorkout(work);
    });
    //console.log(this.#dataWorkouts);
  }

  reset() {
    localStorage.removeItem('key');
    location.reload();
  }
}

//
//
//

//
//
//
//

const app = new App();
