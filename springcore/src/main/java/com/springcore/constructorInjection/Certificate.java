package com.springcore.constructorInjection;

public class Certificate {
    String cerName;

    public Certificate(String cerName){
        this.cerName = cerName;
    }

    @Override
    public String toString(){
        return this.cerName;
    }
}
