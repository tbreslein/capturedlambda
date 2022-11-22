---
layout: ../../layouts/PostLayout.astro
title: Just enough coding, pt. 1 - What is a program
author: Tommy Breslein
date: 2022-11-22
draft: false
---

# Just enough coding, part 1 - What is a program?

## 0. About this series

This is the first post in a little series of posts I'm planning aimed at non-programmers looking to get a super-surface-level grasp on programming.
That might be someone who works with programmers, someone who's friends with programmers, or someone who's just curious about the topic.
I will not go into the nitty gritty details about the topics, but instead I'm trying to stay at a level where you, hopefully, do not need any background knowledge whatsoever.

This part will not deal with any proper programming yet, but instead we will talk about what happens when you interact with them.

## 1. What do programs even do?

When we "program", what we ultimately do is write programs, so let's talk about what that even is first.

At the end of the day, a program is a set of instructions for a computer to operate on.

Ignoring some special devices, the computers that we interact with are running something we call an operating system, or "OS" for short.
An OS is a big piece of software that facilitates interaction between the user (like you and I), and the hardware, the physical bits and pieces, of the computer.
You probably know at least a couple of operating systems, like Windows, MacOS, AndroidOS, or some Linux distribution.

When we run a program, what usually happens is that the program "asks" the OS to run some instructions, and the OS figures out what to tell the hardware to fulfill that request.
For example, let's say you want to copy a file.
You might open your file explorer, and tell it to make a copy of some file.
That file explorer probably won't make that copy by itself, but rather tell the OS about your request, and then it will figure out what to do.
The OS might even call some other small program to perform this task, but those are unnecessary details.

As you might have already guessed from this, an OS usually consists of many smaller programs that fulfill different purposes.
There might be a small blob of software handling your files, one that knows what to do when you slot in a flash drive into your machine, and one that decides what to draw on your monitor, etc.
How these things are subdivided, how they work individually, and how they work together differs between OSs.

## 2. Interacting with programs

With this very rough description of what a program "does", let's tackle our interaction with programs next.

### 2.1 How are programs stored?

Most programs that you interact with somehow are stored on your computer as a so-called "executable file".
You can view this as an entry point to kick-off a bunch of small steps your OS will do to execute the program.
Often times these executable files are either surrounded by other files they read while they run, or they read some other files that are stored somewhere on your hard drive and available to all programs on your computer.
That is why just handing someone the executable by itself does not suffice to have them run a program, because they might be missing some other files the program needs.

An "executable file" on your computer is either a plain set of human-readable instructions written in a "scriptable" programming language, or it is stored as a bunch of essentially zeros and ones, which we call "machine-readable".
The latter also was originally written as human-readable code, but it was then translated into something machine-readable; we call this translation step "compiling".
We often call the other type a "script", and running this script calls a separate piece of software, an interpreter, that runs the instructions in the script on-the-fly.

We will probably talk about compiling, scripting, and things like that at a different point in time.
For now, know that the programs you are interacting with were at least at one point human-readable source code that have been compiled (/translated) to machine-readable code.

### 2.2 "Perpetual" and "Transient" programs

Confession time: I have no clue whether there is established vocabulary for what I am about to describe, but what I am going to talk about is a clear distinction between two "kinds" of programs.

What I want to talk about here is the "life cycle" of a program.
By "life cycle" I mean the time frame between you clicking on that executable file (like those `.exe` on Windows) - that's when that life cycle starts - and when the program closes for whatever reason.
When it comes to how the life cycle goes, we can identify two different kinds of software.
One type, that I will be calling "perpetual", is a kind of program that you start and then it keeps running until you actively close it (or it crashes).
Your web browser is a clear example for that: You open whatever your browser happens to be, and it just keeps on chugging along, until you close the window.
Other good examples are the multitude of programs that your OS spins up and that just run in the background, as well as the OS itself.

There are also what I would call "transient" programs, which are ones that terminate themselves after running down a set of instructions.
These are programs that usually just do one job, and once they are done, they close.
When you install software, most of these executable installers can be categorised like that where, once the installation has ended, the installer closes.
These programs often have little to no interactivity with the user; maybe you have to tell the installer where to put the program you like to install, but often times that's it.

What's interesting about the life cycle of these two kinds of programs is that the transient ones are more like a baking recipe.
They just run top to bottom and that's it.
Perpetual programs on the other hand are more like you just engaging in a general activity, like going on a walk; at some point you just decide to go back home.
But in the mean time, what a "perpetual" program does, is that it runs sort of a loop that keeps the program alive.
That loop might itself be a small set of instructions again (checking whether the user clicked a button, checking whether a webpage changed its content in the meantime, checking whether the user changed the dimensions of the window the program is displayed in...), and that loop in itself runs top to bottom again, but instead of terminating the program once the end of this cycle is reached, it starts back at the top.

At some point though, for example when you close your web browser, the program will leave this loop and usually do some sort of "clean up" before it completely exits like maybe saving the tabs you have had open.

### 2.3 Starting a program on the OS level

Whenever you start any program, no matter which kind of program it is, the OS starts what is called a "process".
A process is basically the program being alive and doing its thing while the OS keeps track of it, whether it is still running or crashed or hangs or whatever.
Think of it like a program being the set of instructions of baking a cake, and the process being the act of actually following the instructions and baking the cake.

At this point, it would be pretty useful to know about the two different kinds of storage in any computer: Permanent and ephemeral storage.
Permanent storage is your hard drive / SSD, the thing you put your files onto.
Ephemeral storage is also called "memory" or RAM.

The reason we have these two is fairly easy: Your hard drive is able to just store data without a power source.
That is why your files are still there after shutting down your computer and booting it again.
RAM on the other hand needs a constant power source to keep the data inside "alive".
Once you turn off the computer, the data on the RAM is lost.
But, on the other hand, reading from RAM is orders of magnitude faster compared to reading from your hard drive.
That is why, when a program starts up, the OS loads the program from your hard drive into RAM and runs it from there.
RAM, like your hard drive disk space, is a limited resource, and your computer can literally run out of available RAM space.

Due to my lack of experience with Apple products, I do not know what the program for such a purpose would be, but on Windows you probably have at some point interacted with what is called the "Task Manager".
This little utility gives you an overview of the processes currently running, and giving you an overview of the resources of your system like how much of your memory is used, how much of your processor is utilised, etc.
On Linux there are numerous utilities your particular flavour of Linux might use for this purpose, the most common being a tool called `htop` that you need to call from the command line.

When a process starts, the OS gives it some memory to work with.
Most useful programs probably need to, temporarily, store some data while they run, in addition to the program itself being stored in memory while it runs.
We will see what "storing temporary data" in that sense means when we talk in more detail about what programs do under the hood.

### 2.4 Terminating a program

So what exactly happens when a program exits?
For one, the space in RAM the program took up can be freed up for other processes to use again, and maybe the program opened some files that can be closed again.
Apart from that, the OS, and often times the user, is interested in whether the program exited as it was supposed to, or whether it crashed or exited with an error.
The OS keeps track of that with what is often called an "exit status".
That is usually just a number that the program hands over to the OS when it exits and there are two conventions about the value of that number.

The one big convention about the exit status is that the number zero means that the program terminated normally; no error occurred, nothing crashed, it just exited as it was supposed to.
Any non-zero number usually means that something was wrong or at least off, but there are no conventions about what different non-zero numbers mean, so the meaning of theses exit statuses differs from program to program.

Let's use baking cakes as an example again:
I hand you the recipe for a cake and you go bake that cake, but maybe I'm not interested in the cake itself, maybe I'm only interested in whether the baking was successful.
So, to communicate that with me you give me back a number when you're done.
If you gave me a zero, I know that everything worked as planned, but if you give me any other number that would mean that something unexpected happened.
Maybe you give me an eleven, but there is no rule book anywhere telling us what eleven mean; the meaning of that number, like all non-zero numbers, would be specific to the instructions / recipe / program.
In this example, the instructions would (hopefully) have a list of these error codes and what they mean, and maybe it says that an error code of "eleven" means that we ran out out eggs.

These numbers are also, most of the time, only relevant to the developers of that program.
For example, if you encounter an error running a piece of software, you probably have seen a little error pop-up which might have told you that the exit status or error code of the program was some specific number.

You might have seen something similar with gadgets, appliances or other machines.
When something goes wrong, they might output something like "error code: 112" (or some other number) on a display and then you can either look into the manual or have to call customer support to figure out what that error code means.

When reporting that error to the developers, they use that number to get an idea about what happened to lead to this error.
This might be a user error that was not handled gracefully by the program, or maybe the program has a bug that resulted in this particular error.
A "bug" in this sense is what we call it when the programmer that wrote a specific passage of the program made a mistake.
That might be something as harmless as a typo, or maybe there was a "logic" error of sorts; who knows.
Either way, it is an unintended thing the program did.
Usually programmers do not program error messages for bugs, since bugs are unintended, but the sort of thing the program ran into might still give the developers a hint about where the bug is and how to fix it.

## Conclusion

As a surface-level introduction to programming, I started this series with something that pretty much anyone knows: programs.
We talked about what a program does and what it interacts with, in particular how it interacts with the operating system in terms of the OS facilitating interaction between the program and the computer's hardware.

We also briefly covered the life cycle of a process, which is basically a running program: How it starts, how it ends, how you can observe the life of a process (at least in Windows and most Linux flavours with the Task Manager and `htop` respectively), and how the OS knows that a program terminated in a regular fashion by sending an exit status of 0 to the OS.

Most, if not all, of these things will be revisited when we talk about how programs are written, which is what this series is about after all.
We will then drill into the details of, for example, error codes again, and explain how having different exit status possibilities is useful.
