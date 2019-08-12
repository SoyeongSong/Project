
public class jaehoon {
    public static void main(String[] args) {
        java.util.ArrayList<String> list = new java.util.ArrayList<String>();
        list.add("Item1");
        list.add("Item2");
        list.add("Item3");
        list.add("Item4");
        System.out.println("The arraylist contains elements: " + list);
        int pos = list.indexOf("Item2");
        System.out.println("The index of Item2 is: " + pos);
        System.out.println("Checking is empty: " + list.isEmpty());
        int size = list.size();
        System.out.println("The size of the list is: " + size);
        for (int i = 0; i < list.size(); i++) {
            System.out.println("Index: " + i + " - Item: " + list.get(i));
        }
    }
}