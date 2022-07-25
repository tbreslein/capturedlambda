---
layout: ../../layouts/PostLayout.astro
title: Programming in Physics
author: Tommy Breslein
date: 2022-07-22
draft: true
---

# {frontmatter.title}

> ... and why practically no one in physics is a software engineer.

Programming has been a thing in physics since way before most of us have been born.
One could argue that computers have been designed first and foremost with encryption and number
crunching in mind.
One of the professors in my institute even had the chance of working with the Cray-1 installation in
Garching, if memory serves, which supposedly was the first Cray installation outside of the US.

In the years since, over the last couple of decades, "programming" as term kind of evolved.
Back then a "programmer" was planning out and stamping punch cards to write code; in physics
virtually all of it being written in the Fortran programming language.

Since then, programming escaped academia, the military, and information technology, and its products
are now EVERYWHERE.
Being a "programmer" is its own trade now, and with that came good practices that have been
developed, design patterns have been found and established; There is now a vague understanding of
what good programming is (though your mileage may vary on what it entails to be "good").

Having had worked in physics as a glorified "programmer" for a couple years, it seems to me that the
"how" of programming is still stuck at least in the early 2000's.
An overwhelming amount of code in academia lacks things that are almost hard requirements for
working in the industry as a software developer.
You could obviously argue that software projects in academia do not "need" things like version
control, project structure (in terms of the team as well as the source code), and proper testing,
but I think this view is incredibly misguided.

This whole post is basically just a big rant about the state of "programming in physics". I was the
same a couple of years ago, and I don't think of myself as a "good" software dev, but I also don't
think you need to be one to understand the absolute state of it in physics.

## 1. The context

Let's get you up to speed on what that "state" even is.
Let's frist talk about what physicists need programming for in the first place, or at least what
some of them need it for.

### 1.1 what do physicists need programming for

First and foremost, not every field in physics is the same when it comes to the kind of programming
they do.
One thing that virtually every physicist uses some light programming for is data visualisation.
Whether that's writing GNUplot scripts, or writing small pipelines with Python's `matplotlib`, they
all had to plot some data at some point and at some point had to one of these things.
Furthermore, `LaTeX` is the defacto-standard when it comes to writing papers, theses and the like.

Now you could argue that neither of these should be called programming, but that's neither here nor
there, they are still a "sort of" programming that everyone in physics is familiar with.

Personally, I do not have a lot of experience with experimental physics.
My training is in numerical physics which is inherently virtually nothing but programming.
I know that there experimental physics groups out there using `LabView` to program equipment
pipelines, or write micro controller code in `C`.

### 1.2 the average curriculum

at best one basics course + numerical programming

### 1.3 is it enough?

probably not.

## 2. switching jobs

if, like me, you want to leave academia for a dev position

### 2.1 discipline

keep. learning. and try not to skip 'hard' topics

### 2.2 dive into the essentials: compiling, toolchains, data structures, algos, ...

actually learn what a compiler does, at least in principle, learn how to use tools like cmake, learn
actual data structures and algorithms...

### 2.3 languages

broaden your horizon a bit: something like C, something like Python, probably javascript, maybe
Haskell...

### 2.4 sources and practice

books, codewars

### 2.5 learn modern tools (shell, git)

for christ's sake, please learn git and BASIC shell scripting
