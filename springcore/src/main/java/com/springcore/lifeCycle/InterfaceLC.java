package com.springcore.lifeCycle;

import org.springframework.beans.factory.DisposableBean;
import org.springframework.beans.factory.InitializingBean;

public class InterfaceLC implements InitializingBean, DisposableBean {
    private double price;

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public InterfaceLC() {
    }

    @Override
    public String toString() {
        return "InterfaceLC{" +
                "price=" + price +
                '}';
    }

    @Override
    public void afterPropertiesSet() throws Exception {
        System.out.println("inti method: TAking price of interface");
    }

    @Override
    public void destroy() throws Exception {
        System.out.println("destroy method : destroy");
    }

}
