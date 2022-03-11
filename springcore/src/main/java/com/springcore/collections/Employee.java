package com.springcore.collections;

import java.util.List;
import java.util.Map;
import java.util.Properties;
import java.util.Set;

public class Employee {
    private String empName;
    private List<String> phone;
    private Set<String> addresses;
    private Map<String, Integer> courses;
    private Properties props;

    public Employee() {
    }

    public Employee(String empName, List<String> phone, Set<String> addresses, Map<String, Integer> courses, Properties props) {
        this.empName = empName;
        this.phone = phone;
        this.addresses = addresses;
        this.courses = courses;
        this.props = props;
    }

    public String getEmpName() {
        return empName;
    }

    public void setEmpName(String empName) {
        this.empName = empName;
    }

    public List<String> getPhone() {
        return phone;
    }

    public void setPhone(List<String> phone) {
        this.phone = phone;
    }

    public Set<String> getAddresses() {
        return addresses;
    }

    public void setAddresses(Set<String> addresses) {
        this.addresses = addresses;
    }

    public Map<String, Integer> getCourses() {
        return courses;
    }

    public void setCourses(Map<String, Integer> courses) {
        this.courses = courses;
    }

    public Properties getProps() {
        return props;
    }

    public void setProps(Properties props) {
        this.props = props;
    }

    @Override
    public String toString() {
        return "Employee{" +
                "empName='" + empName + '\'' +
                ", phone=" + phone +
                ", addresses=" + addresses +
                ", courses=" + courses +
                ", props=" + props +
                '}';
    }
}
