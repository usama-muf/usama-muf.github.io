package com.springcore.collections;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class test {
    public static void main(String[] args) {
        ApplicationContext context = new ClassPathXmlApplicationContext("collectionconfig.xml");
        Employee employee1 = (Employee) context.getBean("employee1");

        System.out.println(employee1.getEmpName());
        System.out.println(employee1.getPhone());
        System.out.println(employee1.getAddresses());
        System.out.println(employee1.getCourses());
        System.out.println(employee1.getProps());

        System.out.println(employee1);
    }
}
