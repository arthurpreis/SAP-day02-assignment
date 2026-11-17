# Assignment notes — Lesson 01



## Starting point and running the app

- New project: day-02-assignment
- Run instructions: fiori generator + preview application
- Browser used: Firefox

## What I built

| File | Implementation and reason |
|---|---|
| `Main.controller.js` | Where the function calls for each button are defined  |
| `Main.view.xml` | Where the structure of the page is defined  |
| `util/Greetings.js` | String manipulation utility that is called by the controller  |

## Verification

| Test ID | Actual result | Pass / Fail / Not tested |
|---|---|---|
| [D02-01] | Select Say Hello | pass |
| [D02-02] | Select Preview Name | pass |
| [D02-03] | Select Preview Fallback with its final spaces-only argument | pass |
| [D02-04] | Run the temporary empty-string check, then restore spaces | pass |
| [D02-05] | Read Greeting.js | pass |
| [D02-06] | Reload after repairing the deliberately wrong module path | pass |
| [D02-07] | Use Tab and Enter/Space | pass |
| [D02-08] | Run git log -1 --oneline and git status after the final commit | pass |

## One issue I investigated

I was confused by the namespace and path definitions. Turns out modules can be loaded using relative paths.

## Reflection

- Why should the fallback rule live in Greeting rather than in each event handler?
If there is a change to the rule, we must modify only the internal logic of the function, without the need to rewrite every event handler that calls it.
- Why must trimming happen before checking whether the name is empty?
This way passing only whitespace as argument will fall in the fallback case.
- How do saving, staging and committing differ?
Saving stores the information on local non-volatile memory. Staging I'm not sure. Something about tracking the changed files. Commit freezes the state of the repo into the git history.
## References used

[Lesson 01 Companion](https://fiori.codingwithhelder.com/lessons/frontend-lesson-01-companion)
[Lesson 02 Companion](https://fiori.codingwithhelder.com/lessons/frontend-lesson-02-companion)

## Remaining work


