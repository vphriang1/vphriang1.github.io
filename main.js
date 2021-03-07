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
            <div class="prophet-bg-info">
            <span>Born: {{born}}</span> <br><span class="origin">Origin: {{region}}</span>
          </div>
   
            <dl class="description">
            <dt>{{prophet}}'s story</dt>

            <dd>{{biography}}</dd>
                <dt>List of the things he dealt with:</dt>
                    <dd> {{obstacle}} </dd>
                <dt>List of the things he did to help society:</dt>
                    <dd> {{solution}} </dd>
                <dt>His earthly mission:</dt>
                    <dd> {{goal}} </dd>      
            </dl>
        </div>
        <ul>
        <label class="l-title">Achievements</label>
        <li v-for="(item, index) in achievements">
          {{item}}
        </li>
      </ul>
  
        <hr>
       <morokot :lessons=lessons :achievements=achievements></morokot>
  </div>`,
});

Vue.component("morokot", {
  props: ["lessons"],
  template: `<div class="lessons">

    <ul>
      <label class="l-title">Teachings</label>
      <li v-for="(item, index) in lessons">
        <a href="#">{{item}} {{index}}</a>
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
      biography1: "His father wanted him to become a mighty king when he did not want, he grew up contained in a palace and was kept oblivious to the harsh realities of life, his uncles ruled by the sword when he believed in rulling my compassion, his mother died giving birth to him, he had a wife and child that he had to let go because he was ready to transcend suffering, he wanted to find a way to end suffering for all living beings at the cost of letting go of everyone and everything, he was rejected by his religious teachers for not being as extreme as they were, he created a school, he got the reputation of an athiest, he faced many challenges, many came to persecute him or find help from him, he resolved many issues.",
      obstacle1:
        "Not available at this time",
      solution1:
        "Perform right actions, have a balanced viewpoint, study the lessons of nature, study how nature interacts, develop courage, develop good deeds, develop merit, develop compassion",
      goal1: "He wanted to conquer his mind and eliminate the root issues of his life such as anger and greed in order to free himself from life's wheel of suffering.",
      achievements1: ["Not available at this time"],

      biography2: "",
      obstacle2:
        "Being poor, dishonor, neglect, he was born deformed, he did not fit in with other children, he lost his mother at an early age - the only person who cared for him, his clients betrayed him, he was exiled for speaking truth, he saw how the government used tax to benefit off it's citizens, he saw peasants living in state of no choice and no future, he brought danger to himself throughout his life because of his blunt honesty",
      solution2:
        "He created his own games to play with as a child without bothering anyone, he researched ancestral poems and history to become a better person, he taught how to create a functional family life so that people can have the family he never had, he searched far and wide for a political leader that would accept him as their sage teacher, he purposely captured the attention of the ruling class men, he replaced the social standard from a penal code based living to a virtuous code based living, he identified the root of societies problems and replaced it with a merciful foundation",
      goal2:
        "He wanted to end corruption, bloodshed, restore peace to the land by finding a virtous ruler to accept him as a teacher. And his teaching is based on family principles.",
      achievements2: [
        "safe streets - crime virtually disappeared",
        "good buisness - merchants no longer cheated their customers",
        "influence - became a governor",
      ],

      biography3: "",
      obstacle3:
        "Idol worshipers, self centered people whom have no compassaion for outsiders, those who judge others without ever judging them self, wicked spirits that bullied it's host, people with irrational fears, buisnessmen whom used the temple for commerce instead of what it was intended for, materialistic religious leaders, the burdens of living under a government that is under the iron grip of a more powerful government",
      solution3:
        "He healed the sick, he healed the blind he healed the lame, he healed the possessed, he ressurected the dead, he calmed the storms, he tamed the fires, he drove bad situations away from approaching his people, he helped people distinguish between truth and falsehood, he described what true equality means, he provided examples, revelation, and evidence in order for his people to develop faith.",
      goal3:
        "He wanted his people to realize the law in it's true meaning as opposed to just adhering to basic dos and don'ts. He wanted to free his people from the harsh treatments of life; free his people from oppressive priesthood and the Roman empire. He wanted his people to make use of what they had inherited from their forefathers. He wanted to see his people practice life with faith and love rather than distrust and hate. He also wanted to endure every type of hardship so that men from all walks of life may relate to him. He wanted his people to realize that the reason why they have Godly qualities is because they are naturally inheriting from God. He wanted to identify each and every person's particular error in order to restore them back into their natural state of being.",
      achievements3: ["Not available at this time"],
      biography4: "",
      obstacle4:
        "Toxic dominance, petty disputes, carelessness, natural disasters, selfish polytheism, idol worship, child sacrfice, abandonment from family members, the anti common good for all, pursuit of worldly gain over righteousness, religious persecution, community prejudice, government forced isolation, starvation, victimization, physical abuse, mockery, ridicule, military invasion, worldly attachments",
      solution4:
        "Demonstrated that having scientific ingenuity and engineering skills relates to solving real life social problems, received the reputation of trustworthy, taught that practicing generosity can prevent lacking, taught people to honor their neighbors, demonstrated being punctual during crucial times, demonstrated the power of asking the right questions, never spoke a bad word to anyone in return, he taught people to replace greed with compassion, taught people to replace selfishness with concern, taught people to answer questions mildly, demonstrated his trueness to his ancestor's goals; knowing about those before him, he taught to keep fighting for the right cause, demonstrated that fighting off aggressors is necessary for the true cause of universitality of men under God, demonstrated that properly guided unity can overcome the odds, demonstrated the discipline of staying humble after all outcomes, he showed mercy and forgiveness to his enemies, he prayed 5 times a day, he fasted during the time of Ramadan, he removed foreign selfish ideas from his people by boldly removing the impracticle attachments of the past, he enforced his community's spiritual standards by raising the bar of holiness and proper etiquette, he demonstrated that more truths of Islam is revealed when doing right deeds",
      goal4: "He wanted to transform society to be upright and merciful",
      achievements4: [
        "women's rights - women in society were exalted to higher positions at a fast pace than ever seen before",
        "gratitude - his followers were admired for bringing peace everywhere they went and were welcomed in believing places",
        "influence - became head of state",
        "civics - established a social order",
      ],

      lesson1: ["lesson", "lesson", "lesson"],

      lesson2: ["lesson", "lesson", "lesson"],

      lesson3: ["lesson", "lesson", "lesson"],

      lesson4: ["lesson", "lesson", "lesson"],
    };
  },
});
