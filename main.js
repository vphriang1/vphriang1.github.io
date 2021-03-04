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
                <dt>List of his character qualities and acts of holiness:</dt>
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
      biography1: ["Buddha's story"],
      obstacle1:
        "Family expectations, social obligations, religious extremists, narrow-sightedness, conflicts involving selfishness, conflicts involving ego, conflicts involving greed",
      solution1:
        "Perform right actions, have a balanced viewpoint, study the lessons of nature, study how nature interacts, develop courage, develop good deeds, develop merit, develop compassion",
      goal1: "Conquer the mind, the root issues of life, end suffering",
      achievements1: ["Not available at this time"],

      biography2: ["Confucius' story"],
      obstacle2:
        "War, bloodshed, neglect by community, born of the lower class, deformities from birth, social awkwardness, desparate poverty, insecurity, social disconnection, ruling class oppression, weak followers, exile, taxes from government, being in the state of no choice, blunt honesty",
      solution2:
        "Creativity, apetite for knowledge, studied history, independent research, unsubscribe from public opinion, develop family love, captured the attention of ruling class men, correct bad conditions in society that create social problems",
      goal2:
        "Ending corruption, ending bloodshed, restoring peace to the land, finding a virtous ruler to accept him as a teacher, save the world",
      achievements2: [
        "safe streets - crime virtually disappeared",
        "good buisness - merchants no longer cheated their customers",
        "influence - became a governor",
      ],

      biography3: ["Jesus' story"],
      obstacle3:
        "Oppression on the poor through use of idolatory, self centered drunkards, public fear of the possessed, worldly critics, the insincere hyprocrites that pretend to be something they are not, the buisnessmen lacking in integrity, the oppressive teachers of religion and law, the superstitions that held people backwards, social hopelessness, inner confusion, social cruelity",
      solution3:
        "He imparted parables to distinguish between truth and falsehood. Which in turn freed people to choose their own paths in life. He made known the kingdom of God in soul and it's contrast to the the way of cheating man.",
      goal3:
        "He wanted people to follow the law in it's true meaning. This would require faith and love. He also wanted to restore the true type of person back into the person who is trapped in falsehood. He compared that being descendents of God ensures one to inherit the qualities of God - which is the hidden secret in their legal system. He brought faith and love back into a faithless and loveless society. He wanted to fix the fallen state of humanity by fixing the root issues of human existence.",
      achievements3: ["Not available at this time"],
      biography4: ["Muhammad's story"],
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
