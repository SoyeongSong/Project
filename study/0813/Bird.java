public class Bird {
    public Bird() {
        System.out.printf("A new Bird has been created!");
    }

    @Override
    public void eat() {
        System.out.printf("An Bird eats...");
    }

    public void fly() {
        System.out.printf("An Bird fly...");
    }
}