//Search a 2D Matrix
//Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:
//Integers in each row are sorted from left to right.
//The first integer of each row is greater than the last integer of the previous row.

import java.util.*;
public class Main
{
    static boolean check(int[][] arr, int len , int bre, int target) {
        
	    for(int i=0; i<arr.length ; i++) {
	        if(target<arr[i][bre-1] && target>arr[i][0]) {
	            if(Arrays.binarySearch(arr[i], target)>=0)
	                return true;
	        }
	        
	        else if(target==arr[i][bre-1] || target==arr[i][0])
	            return true;
	    }
	    return false;
    }
	public static void main(String[] args) {
	    int[][] arr = {{-10,-3,5,7},{10,11,16,20},{23,30,34,60}};
	    int len = arr.length;
	    int bre = arr[0].length;
	    int target = 0;
	    
	    boolean result = check(arr, len,bre, target);
	    
	    
	    System.out.println(result);
		System.out.println("Hello World");
	}
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Spirally traversing a matrix

class Solution
{
    //Function to return a list of integers denoting spiral traversal of matrix.
    static ArrayList<Integer> spirallyTraverse(int arr[][], int r, int c)
    {
         ArrayList<Integer> al = new ArrayList<>();
           int rowBegin = 0;
           int columnBegin = 0;
           int rowEnd= arr.length;
           int columnEnd = arr[0].length;
           
           while(rowBegin<rowEnd && columnBegin<columnEnd)  {
                    
               for(int i=columnBegin ; i<columnEnd ; i++ ) {
                   al.add(arr[rowBegin][i]);
                }
                   rowBegin++;
                
                for(int i=rowBegin ; i<rowEnd ; i++) {
                    al.add(arr[i][columnEnd-1]);
                }
                    columnEnd--;
                
                
                if(rowBegin< rowEnd)
                for(int i=columnEnd-1 ; i>=columnBegin ; i--) {
                    al.add(arr[rowEnd-1][i]);
                }
                    rowEnd--;
                
                
                if(columnBegin< columnEnd)
                for(int i=rowEnd-1 ; i>=rowBegin ; i--) {
                    al.add(arr[i][columnBegin]);
                }
                    columnBegin++;
           }    
           return al;
    }
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////

//Single Number
//Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
//You must implement a solution with a linear runtime complexity and use only constant extra space.

using xor 





///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Minimum swaps and K together 
//Given an array of n positive integers and a number k. 
//Find the minimum number of swaps required to bring all the numbers less than or equal to k together.

import java.math.*;
public class Main
{
	public static void main(String[] args) {
		int[] arr={8,16,4,3,2,12,36,5,14};
		int n = arr.length;
		int sc = 0;
		int count=0;
		int bad=0;
		int k=14;
		for(int i=0; i<n ; i++) {
		    if(arr[i]<=k)
		        ++count;
		}
		
		for(int i=0; i<count; i++) {
		    if(arr[i]>k) 
		        ++sc;
		}
		
		bad = sc;
		for(int i=0; i<n-count ; i++) {
		    if(arr[i]>k)
		        --bad;
		        
		    if(arr[i+count]> k) 
		        ++bad;
		        
		  sc = Math.min(bad, sc);
        }
		System.out.println(sc);
	}
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Three way partitioning 
//Given an array of size n and a range [a, b]. 
//The task is to partition the array around the range such that array is divided into three parts.
//1) All elements smaller than a come first.
//2) All elements in range a to b come next.
//3) All elements greater than b appear in the end.



import java.util.*;
public class Main
{
    static void swap(int[] array, int a, int b) {
        int temp=array[a];
        array[a]=array[b];
        array[b]=temp;
        
        
    }
	public static void main(String[] args) {
	    /*int[] array = {87, 78, 16, 94};
	    int a=36, b=72;
	    */
	    int[] array = {76, 8, 75, 22, 59, 96, 30, 38, 36};
	    int a=44, b=62;
	    
	    
	    
	    System.out.println(Arrays.toString(array));
	    int start = 0,mid=0;
        int end = array.length-1;
        
        while(mid<=end) {
            if(array[mid]<a) {
                swap(array , start,mid);
                System.out.println("less than a");
                start++;
                mid++;
            }
            else if(array[mid]>b) {
                swap(array , mid , end);
                System.out.println("greater than b");
                end--;
            }
            else {
                
                mid++;
            }
            
        } 
		System.out.println(Arrays.toString(array));
	}
}



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Chocolate Distribution Problem 
//Given an array A[ ] of positive integers of size N, where each value represents the number of chocolates in a packet. 
//Each packet can have a variable number of chocolates. 
//There are M students, the task is to distribute chocolate packets among M students such that :
//1. Each student gets exactly one packet.
//2. The difference between maximum number of chocolates given to a student and minimum number of chocolates given to a student is minimum.

import java.util.*;
public class Main
{
	public static void main(String[] args) {
    ArrayList<Long> al = new ArrayList<Long>();
    long n=8;
    long m=5;
    
    long min = Long.MAX_VALUE;
    al.add(new Long(3));
    al.add(new Long(4));
    al.add(new Long(1));
    al.add(new Long(9));
    al.add(new Long(56));
    al.add(new Long(7));
    al.add(new Long(9));
    al.add(new Long(12));
    Collections.sort(al);
    System.out.println(al);
    for(int l=0 ; l<=n-m ; l++) {
        if((al.get((int)(l+m-1))-al.get(l))<min)
            min = al.get((int)(l+m-1))-al.get(l);
    }
    
    
    System.out.println(min);
	}
}



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Find the triplet that sum to a given value


import java.util.*;
public class Main
{
	public static void main(String[] args) {
        int[] arr={890 ,479 ,884 ,926 ,266, 261, 46 ,779 ,822 ,856 ,521, 928 ,774 ,135 ,252 ,676 ,337 ,335, 2 ,738 ,311 ,975 ,591 ,357 ,72 ,81 ,936 ,146, 283
};      Arrays.sort(arr);
	    int X=647;
	    System.out.println(Arrays.toString(arr));
	    
	    for(int i=0; i< arr.length ; i++) {
	        int sp = i+1 , ep = arr.length-1;
	        
	        while(sp<ep) {
	            if(arr[i]+arr[sp]+arr[ep]==X)
	                System.out.println("Found a match at"+i+" "+sp+" "+ep);
	            if(arr[i]+arr[sp]+arr[ep]>X)
	                --ep;
	            if(arr[i]+arr[sp]+arr[ep]<X)
	                ++sp;
	        }
	    }
	    
	}
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Array Subset of another array 
//Given two arrays: a1[0..n-1] of size n and a2[0..m-1] of size m.
// Task is to check whether a2[] is a subset of a1[] or not. Both the arrays can be sorted or unsorted.
//It may be assumed that elements in both array are distinct.

/*import java.util.*;
public class practical
{
	public static void main(String args[]) {
		int[] arr = {1,2,3,4,5,6};
		int[] check = {1,5,3,9};
		List<Integer> l = new ArrayList<Integer>();
		
		for(Integer i: arr)
		    l.add(i);
        System.out.println(l);

		for(int i=0;i<check.length; i++) {
            if (!l.contains(check[i])) {
                System.out.println("not found " + check[i]);
                break;
            }
            
            else 
            		        System.out.println("found "+check[i]);
		        
		}
		
		System.out.println(l);
	}
}
*/
////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Given an array of size n and a number k,\
// find all elements that appear more than n/k times
/*
import java.util.*;
public class practical
{
	public static void main(String[] args) {
		int[] arr={3,1,2,2,1,2,3,3};
		HashMap<Integer, Integer> hm = new HashMap<>();
		for(int i=0; i<arr.length; i++) {
		    if(hm.containsKey(arr[i])) 
		        hm.replace(arr[i],(hm.get(arr[i])+1));
		    else 
		        hm.put(arr[i],1);
		}
		
		int div = arr.length/4;
		
		for(Map.Entry<Integer, Integer> e:hm.entrySet()) {
		    if(e.getValue()>div) 
		        System.out.println(e.getKey());
		}
		System.out.println(hm);
	}
}
*/
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//print elements :Spiral matrix 

/*
int[][] matrix= 
	       {{1, 2, 3, 4},
           {5, 6, 7, 8},
           {9, 10, 11, 12},
           {13, 14, 15,16}};
	    
	    
        List<Integer> l = new ArrayList<>();
        
        int rowBegin=0;
        int rowEnd =matrix.length;
        int columnBegin=0;
        int columnEnd=matrix[0].length;
        
        while(rowBegin<=rowEnd && columnBegin<= columnEnd) {
            for(int i=rowBegin ; i<columnEnd ; i++ ) {
                l.add(matrix[rowBegin][i]);
            }
            System.out.println(l);
            rowBegin++;
            
            for(int i=rowBegin; i<columnEnd ; i++ ) {
                l.add(matrix[i][columnEnd-1]);
            }
            System.out.println(l);
            columnEnd--;
            
            for(int i=columnEnd-1 ; i>=columnBegin ; i--) {
                l.add(matrix[rowEnd-1][i]);
            }
            System.out.println(l);
            rowEnd--;
            
            for(int i=rowEnd-1 ; i>columnBegin ; i--) {
                l.add(matrix[i][columnBegin]);
            }
            System.out.println(l);
            columnBegin++;
            
        }''

         for(int i=rowBegin ; i<columnEnd ; i++ ) {
                l.add(matrix[rowBegin][i]);
            }
            System.out.println(l);
            rowBegin++;
            
            for(int i=rowBegin; i<columnEnd-1 ; i++ ) {
                l.add(matrix[i][columnEnd-1]);
            }
            System.out.println(l);
            columnEnd--;
            
            for(int i=columnEnd-1 ; i>=columnBegin ; i--) {
                l.add(matrix[rowEnd-1][i]);
            }
            System.out.println(l);
            rowEnd--;
            
            for(int i=rowEnd-1 ; i>columnBegin ; i--) {
                l.add(matrix[i][columnBegin]);
            }
            System.out.println(l);
            columnBegin++;
/*


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Longest consecutive subsequence :
	//this approach is not always successfull coz it will fail when elements repeats and when elements are negative

import java.util.*;
import java.math.*;
public class Main
{
  public static void main (String[]args)
  {
    int[] arr =
      { 1,3,9,6,4,2 };
    Arrays.sort (arr);
    int finalLength = 0;
    int length = 1;
    for (int i = 0; i < arr.length - 1; i++)
      {
	if (arr[i] + 1 == arr[i + 1] arr[i] == arr[i + 1])
	  {
	    length++;
	    finalLength = Math.max (finalLength, length);
	  }
	else
	  length = 0;


      }
    System.out.println (Arrays.toString (arr));
    System.out.println (finalLength);
  }
}
*/


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
// Maximum Product Subarray
import java.util.*;

class practical {
    static int fnMaxm(int x, int y) {
        return x > y ? x : y;
    }

    static int fnMinm(int x, int y) {
        return x < y ? x : y;
    }
    public static void main(String args[]) {
        int[] arr = { 0, 0, -25,0,0 };
        int maxm = 1, minm = 1;
        int finalProduct = 0;

        for (int i = 0; i < arr.length; i++) {

            if (arr[i] > 0) {
                maxm = fnMaxm(maxm * arr[i], 1);
                minm = fnMinm(minm * arr[i], 1);
                if(finalProduct<maxm)
                    finalProduct=maxm;

            } else if (arr[i] < 0) {
                int temp = maxm;
                maxm = fnMaxm(minm * arr[i], 1);
                minm = temp * arr[i];
                if(finalProduct<maxm)
                    finalProduct=maxm;

            }

            else if(arr[i]==0) {
                if(finalProduct<maxm)
                    finalProduct=maxm;
                maxm = 1;
                minm = 1;

            }
           
        }
        System.out.println(finalProduct);
    }
}
*/
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Factorials of large numbers using bigInteger
/*
import java.util.*; 
import java.math.*;

public class Main
{
	public static void main(String[] args) {
	    BigInteger b = new BigInteger("1");
	    
	    for(int i=2; i<=100; i++) {
	        b=b.multiply(BigInteger.valueOf(i));
	    }
	    ArrayList<Integer> result = new ArrayList<Integer>();
	    
	    for(int i=0; i<b.toString().length(); i++) {
	       result.add(Integer.parseInt(String.valueOf(b.toString().charAt(i))));
	       
	    }
	    System.out.println(result+" "+b);
	}
}
*/

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//sorting  1)Quicksort , merge Sort , bubble sort
// QucikSort


/*


import java.util.*;

class HuffmanNode {
 
    int data;
    char ch;
 
    HuffmanNode left;
    HuffmanNode right;
}
 
class MyComparator implements Comparator<HuffmanNode> {
    public int compare(HuffmanNode left, HuffmanNode right)
    {
 
        return left.data - right.data;
    }
}
 
 class huffmanDemo {
 
    public static void printCode(HuffmanNode root, String s)
    {
 
        if (root.left== null&& root.right == null && Character.isLetter(root.ch)) {
            System.out.println(root.ch + ":" + s);
            return;
        }
 
        printCode(root.left, s + "0");
        printCode(root.right, s + "1");
    }
 
    // main function
    public static void main(String[] args)
    {
 
        Scanner s = new Scanner(System.in);
        System.out.println("Enter Number of elemetns  ");
        int n = s.nextInt();
        char[] charArray = new char[n];
        int[] charfreq = new int[n]; 
        for(int i=0; i<n; i++) {
            System.out.println("Enter character  "+i+1+"  with the frequency (space separated")  ;
            char ch = s.next().charAt(0);
            int freq = s.nextInt();
            charArray[i]=ch;
            charfreq[i]=freq;
            
        }
        PriorityQueue<HuffmanNode> pQueue
            = new PriorityQueue<HuffmanNode>(n, new MyComparator());
 
        for (int i = 0; i < n; i++) {
            HuffmanNode hn = new HuffmanNode();
 
            hn.ch = charArray[i];
            hn.data = charfreq[i];
 
            hn.left = null;
            hn.right = null;
 
            pQueue.add(hn);
        }
 
        // creating a root node
        HuffmanNode root = null;
 
        while (pQueue.size() > 1) {
 
            HuffmanNode left = pQueue.peek();
            pQueue.poll();
 
            HuffmanNode right = pQueue.peek();
            pQueue.poll();
 
            HuffmanNode hfnode = new HuffmanNode();
 
            hfnode.data = left.data + right.data;
            hfnode.ch = '-';
 
            hfnode.left = left;
 
            hfnode.right = right;
 
            root = hfnode;
 
            pQueue.add(hfnode);
        }
 
        printCode(root, "");
    }
}


*/


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



//   Given three arrays sorted in increasing order. Find the elements that are common in all three arrays.
/*import java.util.*;

public class practical {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n1 = sc.nextInt();
        int n2 = sc.nextInt();
        int n3 = sc.nextInt();
        int[] arr1 = new int[n1];//{ 1, 2, 3, 5, 8 };//{ 1, 2, 5, 5, 9, 12, 12, 13, 15, 20, 20, 20 };
        int[] arr2 =new int[n2];// { 1, 5 };//{ 5, 6, 7, 8, 9, 12, 12, 36 };
        int[] arr3 =new int[n3];// {1,3,3,3,4,4,4,4, 5, 36 };
        

        for(int x=0; x<n1 ; x++)
            arr1[x] = sc.nextInt();
            
        for(int x=0; x<n2 ; x++)
            arr2[x] = sc.nextInt();
        
        for(int x=0; x<n3 ; x++)
            arr3[x] = sc.nextInt();

        // int[] arr1 = { 1, 2, 3, 5, 8 };//{ 1, 2, 5, 5, 9, 12, 12, 13, 15, 20, 20, 20 };
        // int[] arr2 = { 1, 5 };//{ 5, 6, 7, 8, 9, 12, 12, 36 };
        // int[] arr3 = {1,3,3,3,4,4,4,4, 5, 36 };
        int i = 0, j = 0, k = 0;

        
        Set<Integer> set = new TreeSet<>(); 
        
        while (i < arr1.length && j < arr2.length && k < arr3.length) {
            if (arr1[i] == arr2[j]) {
                if (arr2[j] == arr3[k]) {
                    set.add(arr3[k]);
                    i++;
                    j++;
                    k++;
                }
                 else if(arr2[j]<arr3[k])
                     j++; 
                 else {
                //     //j++;
                    k++;

                }
            }
            else if (arr1[i] > arr2[j]) {
                j++;
            }
            else
                i++;
        }
        System.out.println(set);
 
    }
}

import java.util.*;

public class practical {
    public static void main(String[] args) {
        int[] arr1 = { 1, 2, 5, 5, 9, 12, 12, 13, 15, 20, 20, 20 };
        Integer[] intarr = new Integer[arr1.length];
        Arrays.setAll(intarr, i -> arr1[i]);

        int[] arr2 = { 5, 6, 7, 8, 9, 12, 12, 36 };
        Integer[] intarr2 = new Integer[arr2.length];
        Arrays.setAll(intarr2, i -> arr2[i]);

        int[] arr3 = { 5, 12, 12, 36 };
        Integer[] intarr3 = new Integer[arr3.length];
        Arrays.setAll(intarr3, i -> arr3[i]);

        Set<Integer> set = new HashSet<>();
        set.addAll(Arrays.asList(intarr));

        set.retainAll(Arrays.asList(intarr2));

        set.retainAll(Arrays.asList(intarr3));

        ArrayList<Integer> s = new ArrayList<>(set);

        System.out.println(set);
 
        System.out.println(s);

    }
} */





        /*        for (int i = 0; i < arr.length; i++) {
    Map <Integer, Integer> hm = new TreeMap<>();
            if (!hm.containsKey(arr[i])) {
                hm.put(arr[i], 1);
            } else {
                hm.put(arr[i], 1);
            }
        }
	    
        
        for (int i = 0; i < arr2.length; i++) {
            if (!hm.containsKey(arr2[i])) {
                hm.put(arr2[i], 1);
            } else {
                hm.put(arr2[i], 2);
            }
        }
        
		for (int i = 0; i < arr2.length; i++) {
            if (!hm.containsKey(arr3[i])) {
                hm.put(arr3[i], 0);
            } else {
                hm.put(arr3[i], 3);
            }
        }
	    
        System.out.println(hm);
	}
}
*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*Count pairs with given sum */

/*
import java.util.*;

class practical {
    public static void main(String args[]) {
        int arr[] = { 1, 1 ,1 , 1 };
        int k = 2;
        int n = arr.length;
        int i = 0, j = n-1;
        int count = 0;

        while (i < n && j >= 0) {
            if (i != j) {
                if (arr[i] + arr[j] == k) {
                    count++;
                    j--;
                } else
                    j--;
            }
            else {
                i++;
                j = n - 1;
            }
            
        }
        System.out.println(count);
    }
}
*/

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* Merge Intervals */
/*
import java.util.*;

class practical {

    public static void calculations(Intrervals arr[]) {
        
        Stack<Intrervals> stack = new Stack<>();

        Arrays.sort(arr, new Comparator<Intrervals>() {
            public int compare(Intrervals i1, Intrervals i2) {
                return i1.getStart() - i2.getStart() ;
            }
        });
        
        stack.push(arr[0]);
        //System.out.println(stack.peek().getStart());

//        System.out.println(arr.length);
        for (int i = 1; i < arr.length; i++) {
            if (arr[i].getStart() < stack.peek().getEnd()) {
                if (arr[i].getEnd() < stack.peek().getEnd()) {
                    stack.pop();
                    stack.push(arr[i]);
                    System.out.println(arr[i].getStart() + " " + arr[i].getEnd());
                }

                else {
                    arr[i] = new Intrervals(stack.peek().getStart(), arr[i].getEnd());
                    stack.pop();
                    stack.push(arr[i]);
                }
            }
            else 
                stack.push(arr[i]);
            
        }
        //arr[2].setEnd(stack.peek().getEnd());

        while (!stack.isEmpty()) {
            Intrervals t = stack.pop();
            System.out.print("[ "+t.getStart() +"  "+ t.getEnd()+" ]  "); 
        }
    }

    public static void main(String[] args) {

        Intrervals arr[] = new Intrervals[6];
        arr[0] = new Intrervals(1, 4);
        arr[1] = new Intrervals(2, 6);
        arr[2] = new Intrervals(7, 10);
        arr[3] = new Intrervals(10,20);
        arr[4] = new Intrervals(5,6);
        arr[5] = new Intrervals(8,12);

        calculations(arr);
    }

}


class Intrervals {
    private int start;
    private int end;
    
    Intrervals(int start, int end) {
        this.start = start;
        this.end = end;
    }
    
    void setStart(int end) {
        this.end = end;
    }
    
    void setEnd(int end) {
        this.end = end;
    }
    
    int getStart() {
        return start;
    }
    
    int getEnd() {
        return end;
    }
}
*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////






/*  XOR Program
import java.util.*;
class Main {
    public static void main(String args[] ) throws Exception {
	    Scanner sc = new Scanner(System.in);
        int cases= sc.nextInt();

        for(int i=0 ; i<cases ; i++) {
            int n = sc.nextInt();
            int[] arr = new int[n];

            for(int j=0; j<n ; j++) {
                int number = sc.nextInt();
                arr[j]= number;
	        }


            int start=0;
	        int next = start+1;
	        int min_xor=Integer.MAX_VALUE;
	    
	        while(next<arr.length) {
	            min_xor=Math.min(min_xor,arr[start]^arr[next]);
	            start++;
	            next++;
            }

            System.out.println(min_xor);
	    }

    }
} */



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
PRACTICAL PROGRAM

class covidCalc {
    private int rrp;
    private int pop;
    private int fop;
    covidCalc() {
       
    }

    covidCalc(int rrp, int pop, int fop) {
        this.rrp = rrp;
        this.pop = pop;
        this.fop = fop;
    }

    void Setrrp(int rrp) {
        if(rrp <=22){
            this.rrp=0;
            return;
        }
        else if (rrp>=23 && rrp<=28) {
            this.rrp=1;
            return;
        }
        else if (rrp>28) {
            this.rrp = 2;
            return ;
        }
        
        this.rrp = -1;
    }

    void Setpop(int pop) {
         if(pop >92){
            this.rrp=0;
            return;
        }
        else if (pop>=89 && pop<=92) {
            this.pop=2;
            return;
        }
        else if (pop<=88) {
            this.pop = 5;
            return ;
        }
        
        this.rrp = -1;
    }

    void Setfop(int fop) {
        
         if(fop <=2){
            this.fop=0;
            return;
        }
        else if (fop>=3 && fop<=4) {
            this.fop=4;
            return;
        }
        else if (fop>=5  && fop <=6) {
            this.fop = 5;
            return ;
        }
        
        this.rrp = -1;
    }

    int Getrrp() {
        return rrp;
    }

    int Getpop() {
        return pop;
    }

    int Getfop() {
        return fop;
    }

    int qcsi;
    int calc_qCSI() {
        qcsi = 0;

        //qcsi = covidCalc[i].Getrrp+covidCalc[i].Getpop+covidCalc[i].Getfop;
        qcsi = Getrrp() + Getfop() + Getpop();
        return qcsi;
    }

     String calc_riskLvl() {
         if(qcsi<=5)
         return ("low");
         else if(qcsi>5 &&qcsi<=9)
         return "moderate";
         else if(qcsi>9)
         return "high";
         else 
             return "wrong value";
        
     }

}



class practical {
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        covidCalc cc = new covidCalc(); 
        System.out.println("Enter number of person");
        
        int n = sc.nextInt();
        
        for (int i = 0; i < n; i++) {
            
            System.out.println("Enter details for " + i + 1 + " person");
            
            System.out.println("enter Respiratory rate point :");
            int rrp = sc.nextInt();

            System.out.println("enter Pulse Oximetry point :");
            int pop = sc.nextInt();

            System.out.println("enter O2 Flow rate point :");
            int fop = sc.nextInt();

            cc.Setrrp(rrp);
            cc.Setpop(pop);
            cc.Setfop(fop);
            
            System.out.println("\nYour \"QCSI\" is : "+cc.calc_qCSI());
            System.out.println("RESULT : "+cc.calc_riskLvl()+"\n");
            
            
        }

        sc.close();

        
        
    }
}
*/
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////