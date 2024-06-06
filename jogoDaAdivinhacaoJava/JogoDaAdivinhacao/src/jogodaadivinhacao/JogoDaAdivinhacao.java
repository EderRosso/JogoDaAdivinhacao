
package jogodaadivinhacao;

import java.util.Random;

/**
 *
 * @author Eder
 */
public class JogoDaAdivinhacao {

    public static void main(String[] args) {
        Random random = new Random(); // novo objeto random
        int numeroSecreto = random.nextInt(10) + 1; //Gera números entre 1 e 10 
        System.out.println(numeroSecreto);// Mostra o numeroSecreto
    }
    
}
