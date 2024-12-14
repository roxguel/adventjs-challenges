Challenge 07
====

The **grinch** 👹 has passed through Santa Claus's workshop! And what a mess he has made. He has changed the order of some packages, so shipments cannot be made.

Luckily, the elf _Pheralb_ has detected the pattern the grinch followed to jumble them. **He has written the rules that we must follow to reorder the packages. The instructions are as follows:**

1. You will receive a string containing letters and parentheses.
2. Every time you find a pair of parentheses, you need to reverse the content within them.
3. If there are nested parentheses, solve the innermost ones first.
4. Return the resulting string with parentheses removed, but with the content correctly reversed.

He left us some examples:

```javascript
fixPackages('a(cb)de')
// ➞ "abcde"
// We reverse "cb" inside the parentheses

fixPackages('a(bc(def)g)h')
// ➞ "agdefcbh"
// 1st we reverse "def" → "fed", then we reverse "bcfedg" → "gdefcb"

fixPackages('abc(def(gh)i)jk')
// ➞ "abcighfedjk"
// 1st we reverse "gh" → "hg", then "defhgi" → "ighfed"

fixPackages('a(b(c))e')
// ➞ "acbe"
// 1st we reverse "c" → "c", then "bc" → "cb"
```