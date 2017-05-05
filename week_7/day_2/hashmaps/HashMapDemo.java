import java.util.*;

public class HashMapDemo {
  public static void main(String[] args) {
  //   HashMap<String, Integer> javaKnowledge = new HashMap<String, Integer>();

  //   javaKnowledge.put("John", 101);
  //   javaKnowledge.put("Ally", 99);

  //   Integer javaKnowl = javaKnowledge.get("John");

  //   System.out.println("John's java knowledge is " + javaKnowl + "%");
  // HashMap<String, Person> people = new HashMap<String, Person>();

  // Person john = new Person("John", 36, 2.0);
  // Person ally = new Person("Ally", 38, 1.6);

  // people.put("John", john);
  // people.put("Ally", ally);

  // Person person1 = people.get("John");

  // System.out.println(people.size());
  // System.out.println(people.values());



  // System.out.println(person1.getName() + " is " + person1.getAge() + "years old");

    HashMap<String, Population>population = new HashMap<String, Population>();

    Population uk = new Population("UK", 64100000);
    Population ger = new Population("Germany", 80620000);
    Population fr = new Population("France", 66030000);
    Population jp = new Population("Japan", 127300000);

    population.put("UK", uk);
    population.put("Germany", ger);
    population.put("France", fr);
    population.put("Japan", jp);


    Population popuk = population.get("UK");

    Set keyset = population.keySet();

    System.out.println(popuk.getName());
    System.out.println(popuk.getPop());
    System.out.println(population.values());
    System.out.println(keyset);


  }
}