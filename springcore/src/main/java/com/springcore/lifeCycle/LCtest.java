package com.springcore.lifeCycle;

import org.springframework.context.support.AbstractApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class LCtest {
    public static void main(String[] args) {

        AbstractApplicationContext context = new ClassPathXmlApplicationContext("XmlLifeCycleconfig.xml");
        XmlLifeCycle lc = (XmlLifeCycle) context.getBean("xmlLC1");
        System.out.println(lc);
        context.registerShutdownHook();

        System.out.println("////\n"+"////");
        InterfaceLC interfaceLC =(InterfaceLC) context.getBean("intLC");
        System.out.println(interfaceLC);

    }
}
