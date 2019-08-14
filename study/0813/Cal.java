import java.util.ArrayList;
import java.util.HashMap;

public class Cal {
    public int sum(int a, int b) {
        return a + b;
    }

    public int sub(int a, int b) {
        return a - b;
    }

    public int mul(int a, int b) {
        return a * b;
    }

    public float div(int a, int b) {
        return (float) a / b;
    }

    public void result(int a, int b) {

        System.out.println("Enter :" + a + "," + b);
        System.out.println("Addition : " + sum(a, b));
        System.out.println("Subtraction : " + sub(a, b));
        System.out.println("Multiplication : " + mul(a, b));
        System.out.println("Division : " + div(a, b));

    }

    public static void main(String[] args) {
        int a = 6;
        int b = 4;

        Cal myCal = new Cal();
        myCal.result(a, b);

    }
}