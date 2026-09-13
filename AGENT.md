Project test framework: Robot Framework + SeleniumLibrary

Overview
- Purpose: automated UI tests for Pega Client Onboarding (PegaLabs instance).
- Framework: Robot Framework (7.x) using SeleniumLibrary; tests live under /tests, shared locators and keywords under /resources, data under /test_data.

Repository layout
- tests/           -> Robot test suites and helper checks (pegalabs.robot, locator checks, feature files)
- resources/       -> Resource files: locators_elements.resource (all locator variables), keywords_screen.resource (reusable keywords)
- test_data/       -> Credentials and other test data
- requirements/    -> exported Playwright specs and requirements docs used as source for test creation
- results/ & log/  -> robot outputs, screenshots, reports
- .venv/           -> optional virtualenv used during development

Key files
- tests/pegalabs.robot      : main suite that contains TC-001..TC-004
- resources/locators_elements.resource : canonical locator variables (use these in tests/keywords)
- resources/keywords_screen.resource  : higher-level keywords (Login to Pega Work Portal, Start Case Creation, etc.)
- tests/locator_check_rbw3.robot : example probe for locator verification

How locators are organized and naming
- Prefer stable attributes: data-testid, aria-label, element id or label[@for]
- Variable naming convention: ${OBJECT_DESCRIPTION} (uppercase, underscores); alternate selectors use suffixes like _CSS or _ID
- Fallback strategy: data-testid -> aria-label -> id -> label[@for] -> text-based xpath -> last-resort long CSS/XPath

How to run tests (local)
1. Create virtualenv and install Robot Framework and SeleniumLibrary (if not present):
   python -m venv .venv
   .venv\Scripts\activate
   pip install robotframework seleniumlibrary

2. Ensure a browser and compatible WebDriver are available (Chrome + chromedriver on PATH), or configure a remote WebDriver.

3. Run full suite:
   robot tests\pegalabs.robot

4. Run single test by name:
   robot --test "TC004_Client_Onboarding_19Step_Flow" tests\pegalabs.robot

5. Output folder (reports/screenshots): specify --outputdir results
   robot --outputdir results tests\pegalabs.robot

Best practices for adding tests
- Reuse keywords in resources/keywords_screen.resource. If the action already exists, call the keyword instead of duplicating steps.
- Add new element locators to resources/locators_elements.resource; avoid inline XPaths in tests.
- Use readable variable names and add comments for non-obvious fallbacks.
- Add Tag(s) to tests for filtering (e.g., [Tags] TC-005, stable)
- Capture screenshots on failure: tests/pegalabs.robot uses Capture Page Screenshot in teardown.

Troubleshooting locators
- If "Element not visible" occurs, run the locator check test (tests/locator_check_rbw3.robot) or create a small probe that logs visibility and takes screenshots.
- Inspect the app with browser devtools and prefer data-testid/aria-label; ask devs to add stable attributes where possible.
- Update locators_elements.resource with the new variable and reference it in keywords/tests.

CI suggestions
- Use a stable VM or container with Chrome and chromedriver installed.
- Activate venv and run: robot --outputdir results --variable BROWSER:Chrome tests\pegalabs.robot
- Archive results/ and screenshots as build artifacts.

Maintenance notes
- Keep locators centralized in resources/locators_elements.resource to simplify updates.
- Keep keywords generic and idempotent (avoid hard sleeps unless strictly necessary; prefer explicit waits).
- When converting Playwright recordings, map Playwright locators to stable Robot variables and add fallbacks.

Useful commands
- List available tests: robot --listtests tests\pegalabs.robot
- Run specific tag: robot --include stable tests\pegalabs.robot
- Re-run failed tests: robot --rerunfailed results\output.xml --outputdir results

Contact and ownership
- Current automated test author: repository user (see git history locally)

Where to start next
1. Replace brittle selectors with data-testid when app changes allow it.
2. Parameterize test data (use variables in test_data/*.resource).
3. Add CI job that runs a smoke test (TC-003/TC-004) on each merge.

Generated on: 2026-09-11
