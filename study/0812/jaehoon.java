
public class jaehoon {
    public static void main(String[] args) {
        int i, j;
        int k = 1;
        for (i = 1; i < 8; i++) {
            for (j = 0; j < 5; j++) {
                if (i == 1 || i == 7) {
                    System.out.printf("~\t");
                } else {
                    if (j == 0 || j == 4) {
                        System.out.printf("!\t");
                    } else {
                        System.out.printf(k + "\t");
                        k += 5;
                    }
                }
            }
            k = i;
            System.out.printf("\n");
        }
    }
}