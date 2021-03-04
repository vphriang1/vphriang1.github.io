Vue.component("prophets", {
  props: [
    "prophet",
    "prophetImage",
    "born",
    "region",
    "obstacle",
    "solution",
    "goal",
    "biography",
    "lessons",
    "achievements",
  ],
  template: `<div class="">
      <h3>Prophet {{prophet}}</h3>
        <div class="prophet-image">
            <img class="prophet-img" style="width: 200px" v-bind:src="prophetImage" v-bind:alt="prophet"/>   
            <div class="prophet-info">
            <span>Born: {{born}}</span> <br><span class="origin">Origin: {{region}}</span>
          </div>
          <ul>
          <label class="l-title">Biography</label>
          <li v-for="(item, index) in biography">
            <a href="#">{{item}}</a>
          </li>
        </ul>
            <dl class="description">
                <dt>List the things he dealt with:</dt>
                    <dd> {{obstacle}} </dd>
                <dt>List of his response during the course of his prophet-hood:</dt>
                    <dd> {{solution}} </dd>
                <dt>His mission:</dt>
                    <dd> {{goal}} </dd>      
            </dl>
        </div>
  
        <hr>
       <morokot :lessons=lessons :achievements=achievements></morokot>
  </div>`,
});

Vue.component("morokot", {
  props: ["lessons", "achievements"],
  template: `<div class="lessons">

    <ul>
      <label class="l-title">Teachings</label>
      <li v-for="(item, index) in lessons">
        <a href="#">{{item}} {{index}}</a>
      </li>
    </ul>
    <ul>
      <label class="l-title">Achievements</label>
      <li v-for="(item, index) in achievements">
        {{item}}
      </li>
    </ul>
  </div>`,
});

Vue.component("survey", {
  template: `<div id="survey">
    <form>
    <span></span>
    <label>With 5 being the highest and 1 being the lowest, please rate how much the issue applies to you.</label>
      <div id="s-radio">
       
          I have self esteem and confidence issues
          <input name="question1" type="radio">5</input>
          <input name="question1" type="radio">4</input>
          <input name="question1" type="radio">3</input>
          <input name="question1" type="radio">2</input>
          <input name="question1" type="radio">1</input>
          <br>
          I deal with oppression and verbal abuse
          <input name="question2" type="radio">5</input>
          <input name="question2" type="radio">4</input>
          <input name="question2" type="radio">3</input>
          <input name="question2" type="radio">2</input>
          <input name="question2" type="radio">1</input>
          <br>
          I have financial worries
          <input name="question3" type="radio">5</input>
          <input name="question3" type="radio">4</input>
          <input name="question3" type="radio">3</input>
          <input name="question3" type="radio">2</input>
          <input name="question3" type="radio">1</input>
          <br>
          My home and family life is unstable
          <input name="question4" type="radio">5</input>
          <input name="question4" type="radio">4</input>
          <input name="question4" type="radio">3</input>
          <input name="question4" type="radio">2</input>
          <input name="question4" type="radio">1</input>
          <br>
          I have no hope or optimism
          <input name="question5" type="radio">5</input>
          <input name="question5" type="radio">4</input>
          <input name="question5" type="radio">3</input>
          <input name="question5" type="radio">2</input>
          <input name="question5" type="radio">1</input>
          <br>
          My health is bad
          <input name="question6" type="radio">5</input>
          <input name="question6" type="radio">4</input>
          <input name="question6" type="radio">3</input>
          <input name="question6" type="radio">2</input>
          <input name="question6" type="radio">1</input>
          <br>
          I have relationship and love problems
          <input name="question7" type="radio">5</input>
          <input name="question7" type="radio">4</input>
          <input name="question7" type="radio">3</input>
          <input name="question7" type="radio">2</input>
          <input name="question7" type="radio">1</input>
          <br>
          I am trying to change
          <input name="question8" type="radio">5</input>
          <input name="question8" type="radio">4</input>
          <input name="question8" type="radio">3</input>
          <input name="question8" type="radio">2</input>
          <input name="question8" type="radio">1</input>
          <br>
          I am in constant fear and worry
          <input name="question9" type="radio">5</input>
          <input name="question9" type="radio">4</input>
          <input name="question9" type="radio">3</input>
          <input name="question9" type="radio">2</input>
          <input name="question9" type="radio">1</input>
          <br>
          I am trying to start something new like an enterprise or endeavor
          <input name="question10" type="radio">5</input>
          <input name="question10" type="radio">4</input>
          <input name="question10" type="radio">3</input>
          <input name="question10" type="radio">2</input>
          <input name="question10" type="radio">1</input>
          <br>
          I struggle with lonliness and depression
          <input name="question11" type="radio">5</input>
          <input name="question11" type="radio">4</input>
          <input name="question11" type="radio">3</input>
          <input name="question11" type="radio">2</input>
          <input name="question11" type="radio">1</input>
          <br>
          I am addicted to alchohol or drugs
          <input name="question12" type="radio">5</input>
          <input name="question12" type="radio">4</input>
          <input name="question12" type="radio">3</input>
          <input name="question12" type="radio">2</input>
          <input name="question12" type="radio">1</input>             
      </div>
      
        <input id="survey-submit" type="submit" value="Submit">
    
    </form>
    <label>Here are the stories you should read:</label>
    <p>(This feature is not set up yet)</p>
  </div>
  `,
});

var app = new Vue({
  el: "#app",
  data() {
    return {
      obstacle1:
        "Family expectations, social obligations, religious extremists, narrow-sightedness, conflicts involving selfishness, conflicts involving ego, conflicts involving greed",
      solution1:
        "Perform right actions, have a balanced viewpoint, study the lessons of nature, study how nature interacts, develop courage, develop good deeds, develop merit, develop compassion",
      goal1: "Conquer the mind, the root issues of life, end suffering",

      obstacle2:
        "War, bloodshed, neglect by community, born of the lower class, deformities from birth, social awkwardness, desparate poverty, insecurity, social disconnection, ruling class oppression, weak followers, exile, taxes from government, being in the state of no choice, blunt honesty",
      solution2:
        "Creativity, apetite for knowledge, studied history, independent research, unsubscribe from public opinion, develop family love, captured the attention of ruling class men, correct bad conditions in society that create social problems",
      goal2:
        "Ending corruption, ending bloodshed, restoring peace to the land, finding a virtous ruler to accept him as a teacher, save the world",

      obstacle3:
        "The practice of useless idolatory, the insincere, the lacking in integrity, the oppressive teachers of religion and law, superstition, social hopelessness, inner confusion, social cruelity",
      solution3:
        "Impart parables, distinguish truth vs falsehood, free people to choose their own paths in life, make known the kingdom of soul vs the way of cheating man",
      goal3:
        "Fufill the true meaning of the Prophetic Law, restore men back into their spiritual lineage, brought faith and love into the way of life, undo the fallen state of mind",

      obstacle4:
        "Toxic dominance, petty disputes, carelessness, natural disasters, selfish polytheism, idol worship, child sacrfice, abandonment from family members, the anti common good for all, pursuit of worldly gain over righteousness, religious persecution, community prejudice, government forced isolation, starvation, victimization, physical abuse, mockery, ridicule, military invasion, worldly attachments",
      solution4:
        "Scientific ingenuity, trustworthiness, generosity to combat lacking, honor neighbors, timing, asking right questions, never speak a bad word in return, replace greed with compassion, replace selfishness with concern, answering questions mildly, staying true to father Abraham's goal, fighting always for the right cause, retaliation to aggressors when necessary, unity, staying humble after all outcomes, mercy toward enemies, forgiveness of enemies, maintain spiritual permenance until victory, praying 5 times a day, fasting during Ramadan, religious purification, removing foreign selfish ideas, enforcing spiritual standards - raising the bar of holiness in the world through proper etiquette, reveal truths of Islam by doing right deeds",
      goal4: "Transform society to be upright and merciful",

      biography1: ["Buddha's story"],
      lesson1: ["lesson", "lesson", "lesson"],
      achievements1: ["Not available at this time"],

      biography2: ["Confucius' story"],
      lesson2: ["lesson", "lesson", "lesson"],
      achievements2: [
        "safe streets - crime virtually disappeared",
        "good buisness - merchants no longer cheated their customers",
        "influence - became a governor",
      ],

      biography3: ["Jesus' story"],
      lesson3: ["lesson", "lesson", "lesson"],
      achievements3: ["Not available at this time"],

      biography4: ["Muhammad's story"],
      lesson4: ["lesson", "lesson", "lesson"],
      achievements4: [
        "women's rights - women in society were exalted to higher positions at a fast pace than ever seen before",
        "gratitude - his followers were admired for bringing peace everywhere they went and were welcomed in believing places",
        "influene - became head of state",
        "civics - established a social order",
      ],
    };
  },
});
