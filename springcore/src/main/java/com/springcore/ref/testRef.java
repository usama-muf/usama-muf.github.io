package com.springcore.ref;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class testRef {
    public static void main(String[] args) {
        ApplicationContext context = new ClassPathXmlApplicationContext("refconfig.xml");
        A a = (A) context.getBean("refA");
        System.out.println(a);
        System.out.println(a.getAddress().getArea());
    }
}
