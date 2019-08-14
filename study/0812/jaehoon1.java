import java.util.HashMap;
import java.util.Iterator;
import java.util.Set;
import java.util.Map;
import java.util.Map.Entry;

public class jaehoon1 {
    public static void main(String[] args) {
        HashMap<Integer, String> hmap = new HashMap<Integer, String>();
        hmap.put(12, "Chaitanya");
        hmap.put(2, "Rahul");
        hmap.put(7, "Singh");
        hmap.put(49, "Ajeet");
        hmap.put(3, "Anuj");
        Set set = hmap.entrySet();
        Iterator iterator = set.iterator();
        while (iterator.hasNext()) {
            Map.Entry mentry = (Map.Entry) iterator.next();
            System.out.println("key:" + mentry.getKey() + " & Value: " + mentry.getValue());
        }
        for (Entry<Integer, String> entry : hmap.entrySet()) {
            System.out.println("key:" + entry.getKey() + " & Value: " + entry.getValue());
        }
        for (Integer key : hmap.keySet()) {
            System.out.println("key:" + key + " & Value: " + hmap.get(key));
        }

    }
}