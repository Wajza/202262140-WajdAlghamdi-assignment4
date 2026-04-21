# AI Usage Report

---

## AI Tools Used & Use Cases

**ChatGPT (GPT-4):**
- **API Integration (GitHub):** AI helped generate the basic fetch setup and error handling. I added a retry button, better error messages, a loading spinner, and a dynamic language filter based on the repo data.

- **Complex Logic (Filter + Sort):** AI suggested using filter() and sort(). I combined them properly and added debouncing so the page doesn’t re-render too often.

- **Complex Logic (Quiz):** AI gave a basic structure. I rewrote the questions to match developer paths, added a progress bar, saved results in localStorage, and showed personalized results.

- **State Management:** AI explained localStorage and sessionStorage. I used them for a visit counter, session timer, theme saving, and quiz results.

- **Performance:** AI suggested lazy loading and debouncing. I added Intersection Observer for animations, debounced inputs, lazy-loaded images, and added reduced motion support.


---

## Benefits & Challenges

**Benefits:**
- **Time Efficiency:** AI cut my dev time by about 60–70%. I finished everything in around 4 hours instead of 10+.

- **Learning Accelerator:** I learned API fetching, localStorage, sessionStorage, and combining filter + sort much quicker.

- **Code Quality:**	AI suggested good practices like debouncing, loading states, retry buttons, and accessibility improvements.

- **Problem Solving:** AI helped me understand issues like filter/sort order, quiz logic errors, and timer bugs.

- **Documentation:** AI gave me a base template, which I edited to match my actual project and features.

**Challenges and Limitations:**
- **Context Understanding:** I didn’t always match my existing design, so I had to fix styling and structure.

- **Code Accuracy:** Sometimes AI used wrong variables or had small logic mistakes, so I had to test everything.

- **Generic Solutions:** I replaced placeholder text and basic quiz questions with my own content.

- **Image Path Issues:** AI used generic image paths, so I updated them to match my project.

- **Over-reliance Risk:**  I made sure I understood every line before using it.
---

## Learning Outcomes

**Technical Skills Gained:**
- **GitHub REST API Integration:** Fetch and display repo data, including names, stars, forks, and languages.

- **Combined Filter + Sort Logic:** Always filter first, then sort for correct results.

- **localStorage for Persistent Data:** Used for visit counter, theme, and quiz results.

- **sessionStorage for Session Data:** Used for a real-time session timer.

- **Debouncing for Performance:** Prevents too many updates when users interact quickly.

- **Intersection Observer for Scroll Animations:** Runs animations only when elements are visible.

- **Error Handling for API Calls:** Used try/catch and added retry options.

**Key Technical Concepts Learned:**
- **API Integration:** Fetch data, show loading states, and handle errors properly.

- **Filter + Sort Together:** Filter first, then sort.

- **localStorage vs sessionStorage:** localStorage = permanent, sessionStorage = temporary.

- **sessionStorage for Session Data:** racks user time on the site with a real-time timer; resets when the tab closes.

- **Debouncing:** Wait before running functions to improve performance.

- **Quiz Logic with Weighted Scoring:** Count answers and show the most common result.

**Workflow Improvements:**

- **Before AI:**
I used to guess and randomly change code when something broke. It wasted time and caused more bugs.

- **After AI:**
Now I understand errors, fix them properly, and learn from them. Debugging is much faster and more structured.

---

## Responsible Use & Modifications

For every AI-generated suggestion, I followed this review process:
1. **Generate** → Get AI suggestion
2. **Analyze** → Understand what the code does
3. **Test** → Run in browser to verify functionality
4. **Modify** → Customize for my specific needs
5. **Improve** → Add error handling, comments, optimizations

**Specific Modifications Made:**
| AI-Generated | Why I Changed It |
|--------------|-------------------|
| Generic GitHub username "octocat" | Match my actual GitHub account |
| Basic fetch without error handling | Prevent crashes when API fails |
| Hardcoded language filter options | Need dynamic options from API data |
| Simple filter and sort separately | 	Need them to work together |
| Generic quiz questions about "favorite language" | Need developer path questions |
| Basic quiz result calculation | Need accurate weighted scoring |
| No quiz progress bar | Need visual feedback for users |
| No visit counter | Requirement for state management |
| No session timer | Requirement for state management |
| No debouncing on filters | Performance issues with rapid changes |
| No Intersection Observer for skills | Animations run even when not visible |
| Generic image paths like "profile.jpg" | Match my actual folder structure |
| Basic form validation (empty check only) | Need better user experience |
| No loading states for form submission | Users could submit multiple times |
| Simple theme toggle without animation | Need more polished appearance |
| No localStorage for theme preference | Theme resets on page refresh |

**Academic Integrity Statement:**
I confirm that:
- ✅ All AI-generated code was reviewed and modified
- ✅ I understand every line of code in this project
- ✅ AI was used as a learning tool, not a replacement
- ✅ All content accurately represents my work and identity
- ✅ Image paths were corrected to match my folder structure
- ✅ All personal information (name, ID, contact) is accurate