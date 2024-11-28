---
title: "Two passions: Data Science and MMA. What happens when you combine the two?"
excerpt: "As a big fan of MMA, I decided to apply some Data Science to the UFC, the biggest MMA event in the world. I chose one fight as the target of this study: Charles do Bronx, one of my favorite fighters, against Arman Tsarukyan, which took place at UFC 300 on April 13."
coverImage: "/assets/blog/MMA/cover.jpeg"
date: "2020-03-16T05:35:07.322Z"
author:
  name: Rafael
  picture: "/assets/blog/authors/jj.jpeg"
ogImage:
  url: "/assets/blog/MMA/cover.jpeg"
---



# Data Science Meets UFC: Analyzing Sentiments for Charles do Bronx vs. Arman Tsarukyan

As a big fan of MMA, I decided to apply some Data Science to the UFC, the biggest MMA event in the world. I chose one fight as the target of this study: **Charles do Bronx**, one of my favorite fighters, against **Arman Tsarukyan**, which took place at UFC 300 on **April 13**.

---

## The Inspiration: Sentiments and Twitter Experts

I always follow the week leading up to the fights on Twitter to see what the (Twitter) experts have to say, and this sparked my curiosity:

> **How do these experts' sentiments vary depending on the fight?**
>
> That is, what is their perception **before the fight**, **on the day of the fight**, and **after the event**?

---

## Tweet Scraping: Overcoming Challenges

To bring this idea to life, I first performed some **tweet scraping**. Unfortunately, since **Twitter became X** (thank you, Elon), this task has become much more complicated (aka expensive). As a result, I couldn’t gather a large number of tweets, collecting approximately **3,000 tweets**.

---

## Word Cloud: Charles do Bronx’s Positive Aura

With the mined tweets, it was already possible to get an idea of how fans perceived the fighters. Notice how the perception seems to be **positive towards Charles do Bronx** through the **Word Cloud** of tweets about him.

[Word Cloud Example](path/to/word-cloud-image.png)

---

## Sentiment Analysis: Vader from NLTK

To make the study a bit richer and more interesting, I applied a **Sentiment Analysis** technique: **Vader** from **NLTK**. Here’s how I processed the tweets:

1. **Sentiments Aggregation**:  
   - Positive sentiments → **Positive numbers**  
   - Negative sentiments → **Negative numbers**

2. **Daily Sentiment Tracking**:  
   This approach allowed me to calculate an **overall sentiment per day**, creating a timeline of how fans perceived each fighter.

---

## Sentiment Graphs: Peaks and Drops

Here are the **sentiment graphs** for both **Charles do Bronx** and **Arman Tsarukyan**:

### Charles do Bronx  
*Graph showcasing sentiment trends for Charles.*

### Arman Tsarukyan  
*Graph showcasing sentiment trends for Arman.*

**Observations:**
- One fighter shows an **incredible sentiment peak** on **fight day (UFC 300)**.  
- The other experiences a **notable drop in sentiment** during the same period.

---

## The Challenge: Guess the Winner

Looking at the graphs, can you guess:

1. **Who won the fight?**  
2. **Who lost the fight?**

---

Let me know your thoughts, and I’ll reveal the answer in the next update!
