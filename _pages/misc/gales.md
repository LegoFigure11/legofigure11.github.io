---
layout: blank
title: Explaining Odd/Even frames in Gales
permalink: /misc/gales
---

## Explaining Odd/Even frames in Pokémon XD: Gale of Darkness
### Preface
Many users have come to me confused as to why they are unable to hit their RNG targets in Gales.
While this can be for many reasons (noise, etc.), it can also simply be due to how the RNG works - sometimes you may even need to advance beyond your target to hit it!
This is explained in brief in amab's XD RNG imgur album (go read it if you haven't already), but understanding how Pokémon are generated properly is vitally important to succeeding at this RNG.

It is assumed that you are familiar with basic RNG terms such as "Frame" and how to use and interpret some kind of searching program such as RNGReporter or PokéFinder.

Example Reporter Output:
<textarea readonly style="background-color: rgba(55, 55, 55, 1); color: rgba(244, 244, 249, 1); width: 100%;" rows="8" class="highlighter-rouge">{% include gales.txt %}</textarea>
<br />

Initial Seed (in case you'd rather sift through Reporter's output): ``0157c8f0``

Example Nature lock (NL): ``Hardy Male -> Hardy Female -> Target (Natu)``

Target Frame: ``824003    0F2449D3    Timid   1   31  30  30  31  31  30  Electric    70``

### Explanation
From amab's guide, we know that it takes 7 frames to generate a Pokemon. Thus, we can rewrite our nature lock as so:

``Hardy Male -> Hardy Female (823996) -> Target (824003)``

We also know that each stage of the NL will alternate between Odd and Even, or vice-versa (eg if NL1 is Even, NL2 will be Odd, NL3 will be Even, NL4 will be Odd, etc). So, we can again rewrite our nature lock like this - the Target, or the 3rd stage of the NL (NL3) is odd, so the first stage (NL1) must also be Odd:

``Hardy Male (Odd) -> Hardy Female (823996) -> Target (824003)``

From here, we can work backwards from NL2 in reporter to find frames that satisfy the 1st stage of the NL (Hardy, Male). From latest to earliest, these are:

``823991, 823985, 823916, 823878, 823808, 823762, 823733``

Frame ``823991`` is odd, but because it takes 7 frames for the game to generate a Pokemon, hitting that would cause us to roll past our target NL2 (``823991 + 7 = 823998``, which would take our NL2 to ``824016`` and throw everything completely off). ``823985`` is both odd and is more than 7 frames before our NL2, so this is the upper limit of our NL1. Any frames further than this and we will miss our target NL3.

``823916````823878````823808`` and ``823762`` are all even, so also cannot be used in NL1. This leaves ``823733`` as the lower limit for our NL1. Due to the way that Gales treats Odd and Even frames, landing on any ODD frame greater than ``823733`` and less than or equal to 823985 will cause the NLs to line up in a way that NL is on our target frame (if we hit a frame before the upper limit of our NL1 but after the lower limit, the game will automatically roll forward until it hits the upper limit and generate the Pokemon there).

<br />
But Lego, you still haven't explained why I can advance past my target frame and then hit it later!

We will only land on our target NL3 if our NL1 is an **ODD** frame greater than ``823733`` and less than or equal to ``823985``. What happens if we hit an even one? Let's have a look.

Suppose we land on frame ``823920``. The next Hardy Male spread that occurs on an Even frame after this is 824140, which becomes our NL1. the next Female Hardy spread on an Odd frame after this ``824199``, which means our Natu would be generated on frame ``824206`` - well after our target of ``824003``. Advancing just a single frame more would cause us to land on ``823921``, which means our NL1 becomes ``823985``, NL2 becomes ``823996`` and we hit our target on frame ``824003``. So here you can see how advancing one single frame can effectively make our NL3 jump back almost 200 frames. This is why you should only worry about the Odd frames that you get for your target if your target is Odd, or the Even frames that you get should your target be even.
