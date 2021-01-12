# Tip-Calculator
Tip Calculator is a web-based app that is used in order to determine the share of each person in a given bill amount along with total amount per person, while dining out or requesting services. 

Apart from that, the whole logic and math implementation is done using Javascript, with frontend development through HTML,CSS.

The logic for understanding of how the Amount is sorted whereas how the Tip is calculated is listed below for refernce :
      
      //logic
        tip_per_person = (billAmount * serviceQuality) / number_of_people ;
        Amount_per_person = (billAmount / number_of_people) + tip_per_person ;
