*** Settings ***
Library    SeleniumLibrary
Resource    ../test_data/credentials.resource
Resource    ../resources/locators_elements.resource
Resource    ../resources/keywords_screen.resource


*** Variables ***

# URLs
${PEGA_URL_WORKPORTAL}     https://accenture70.pegalabs.io/prweb/app/clmkyc--client-onboarding-for-financial-services-2?portal=WebPortal
# Login page elements
${USERNAME_FIELD}          xpath=//*[@id="txtUserID"]
${PASSWORD_FIELD}          xpath=//*[@id="txtPassword"]
${LOGIN_BUTTON}            xpath=//*[@id="sub"]

# App shell and case creation elements
${HOME_TAB}                 xpath=//*[@id="TABSPAN"]/span/span
${WORK_PORTAL}              xpath=/html/body/div[5]/header/div/div/div[1]/div[6]/span/a/i
${PORTAL_MENU_DROPDOWN}     xpath=//i[contains(@class, "pi-caret-down") and @data-menuid="pyNavigation1787290109773"]
${CREATE_BUTTON}            xpath=//button[contains(.,'Create') or contains(.,'New')]
${CASE_LINK}                xpath=//button[@role='menuitem'][contains(.,'Client Onboarding')]
${MY_WORK}                  xpath=//*[@name='My Work']
${CASE_TITLE_INPUT}         xpath=//li[@role='menuitem' and @aria-label='Client Onboarding']

# Client Onboarding modal elements
${CLIENT_ONBOARDING_MODAL_HEADER}       xpath=//div[@role='dialog']//h2[contains(.,'Create Client Onboarding')]
${MODAL_MINIMIZE_BUTTON}                xpath=//div[@role='dialog']//button[@aria-label='Minimize modal']
${MODAL_CLOSE_BUTTON}                   xpath=//div[@role='dialog']//button[@aria-label='Close modal']
${INITIATION_STEP_BUTTON}               xpath=//button[@id='ASSIGN-WORKLIST MYORG-CLMKYCCL_1-WORK C-37003!INITIATION_FLOW:AssignmentSF1']
${CAPTURE_CONSENT_STEP_BUTTON}          xpath=//button[@id='ASSIGN-WORKLIST MYORG-CLMKYCCL_1-WORK C-37003!INITIATION_FLOW:AssignmentSF2']
${CLIENT_ONBOARDING_CASE_NAME_INPUT}    xpath=//input[@data-testid='Client onboarding case name:input:control']
${ONBOARDING_CHANNEL_DROPDOWN}          xpath=//select[@data-testid='Onboarding channel:select:control']
${INITIATING_USER_INPUT}                xpath=//input[@data-testid='Initiating user:combo-box:control']
${INITIATING_USER_OPEN}                 xpath=//div[@id='_ltlvkw3m7-combobox']//button[@aria-label='Open combobox list']
${CONSENT_CHECKBOX}                     xpath=//label[@for='_ixkgw6p2f' or @data-testid=':checkbox:label']
${CONSENT_CHECKBOX_INPUT}               xpath=//input[@id='_ixkgw6p2f' and @type='checkbox']
${CONSENT_CHECKBOX_TC002}               xpath=//*[@id="_3vacgvufl"]
${CUSTOMER_INPUT}                       xpath=//input[@data-testid='Customer:combo-box:control']
${CUSTOMER_OPEN}                        xpath=//div[@id='_9vk6ugb0l-combobox']//button[@aria-label='Open combobox list']
${CANCEL_ACTION_BUTTON}                 xpath=//button[@data-testid=':assignment-action-buttons:cancel']
${FILL_FORM_WITH_AI_BUTTON}             xpath=//button[@data-testid=':assignment-action-buttons:fill-form-with-ai']
${NEXT_ACTION_BUTTON}                   xpath=//button[@data-testid=':assignment-action-buttons:submit' and @name='next']
${SUBMIT_ACTION_BUTTON}                 xpath=//button[@data-testid=':assignment-action-buttons:submit' and @name='submit']
${ACCEPT_PRIVACY_BUTTON}                xpath=//button[@data-testid=':privacy-dialog:accept' and contains(normalize-space(.), 'Accept')]

# Generic case metadata
${BROWSER}                 chrome
${URL}                     https://your-pega-url
${CASE_TYPE_NAME}          Client Onboarding
${CASE_TITLE}              Client Onboarding - Automated Test
${CASE_SUMMARY_INPUT}      xpath=//textarea[contains(@name,'summary') or contains(@name,'description')]

# -----------------------------------------------------------------------------
# Auto-added locators extracted from requirements/accenture70_pegalabs_2026-09-11_15-31-34.spec.js
# Added: 2026-09-11
# -----------------------------------------------------------------------------

${CREATE_SVG_PRESENTATION}    xpath=//div[@class='sc-fTrzCy kcoqE']//*[@role='presentation']
${CREATE_SVG_CSS}             css=body > app-root:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > nav:nth-child(3) > div:nth-child(1) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(1) > button:nth-child(1) > div:nth-child(1) > span:nth-child(1) > svg:nth-child(1)

${CLIENT_ONBOARDING_SPAN}     xpath=//span[normalize-space()="Client Onboarding"]

${CLIENT_ONBOARDING_CASE_NAME_INPUT_ID}    xpath=//input[@id='_0o86y1cu7']
${CLIENT_ONBOARDING_CASE_NAME_INPUT_CSS}       css=#_0o86y1cu7

${ONBOARDING_CHANNEL_DROPDOWN_ID}          xpath=//select[@id='_bw1wfsxef']
${ONBOARDING_CHANNEL_DROPDOWN_CSS}         css=#_bw1wfsxef

${INITIATING_USER_OPTION_ABHINAV}          xpath=//li[normalize-space()="abhinav.n.mishra@accenture.com"]
${INITIATING_USER_OPTION_ABHINAV_CSS}      css=body > div:nth-child(4) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > fieldset:nth-child(1) > ul:nth-child(1) > li:nth-child(1) > div:nth-child(2) > div:nth-child(2) > ul:nth-child(1) > li:nth-child(1)

${ONBOARDING_COMPOSITE_DIV}    xpath=//div[@class='sc-fEXmlR bPNMES sc-jxfubC lcXOYq sc-fEXmlR bPNMES']
${ONBOARDING_COMPOSITE_DIV_CSS}    css=.sc-fEXmlR.bPNMES.sc-jxfubC.lcXOYq.sc-fEXmlR.bPNMES

${CONSENT_DIV}                 xpath=//div[@class='sc-gkSfol bniTBG sc-fmPOXC ibPDDS']
${CONSENT_DIV_CSS}             css=.sc-gkSfol.bniTBG.sc-fmPOXC.ibPDDS

${CLOSE_COMBOBOX_BUTTON}       xpath=//button[@aria-label='Close combobox list']
${CLOSE_COMBOBOX_BUTTON_CSS}       css=button[aria-label='Close combobox list']

${CUSTOMER_OPTION_KENJI}        xpath=//span[normalize-space()="Kenji Nakamura"]
${CUSTOMER_OPTION_KENJI_CSS}        css=body > div:nth-child(4) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > fieldset:nth-child(1) > ul:nth-child(1) > li:nth-child(3) > div:nth-child(2) > div:nth-child(1) > span:nth-child(1)

${ASSIGNMENT_ACTION_BUTTON}     xpath=//button[@data-testid=':assignment-action-buttons:submit']
${ASSIGNMENT_ACTION_BUTTON_CSS}    css=body > div:nth-child(4) > div:nth-child(1) > div:nth-child(1) > footer:nth-child(3) > div:nth-child(2) > button:nth-child(2)

${GO_BUTTON}                    xpath=//button[normalize-space()="Go"]
${GO_BUTTON_ARIA}               css=button[aria-label='Go - Enter Profile Details']

${RBW3KEUW0_FIELD_LABEL}        xpath=//div[contains(normalize-space(.), 'Consent') and contains(@class,'sc-')]
${RBW3KEUW0_FIELD_LABEL_CSS}    css=label[for='_rbw3keuw0'] div

# Workflow assignment and decision controls extracted from ClientOnboarding_TC001_HappyFlow.js
${ASSIGNMENT_ACTION}                    xpath=//*[@data-testid=':assignment:action']
${DECISION_REASON_INPUT}                xpath=//*[@data-testid='Decision reason:input:control']
${FINAL_APPROVAL_DECISION}              xpath=//*[@data-testid='Final approval decision:select:control']
${SCREENING_ALERT_CHECKBOX_LABEL}       xpath=(//*[@data-testid=':checkbox:label']/div)[5]
${SCREENING_ALERT_CHECKBOX_CONTROL}     xpath=(//*[@data-testid=':checkbox:control'])[5]
${APPROVE_ACTION_BUTTON}                xpath=//button[@name='Approve' and @data-testid=':assignment-action-buttons:submit']

# -----------------------------------------------------------------------------
# Additional stable xpaths (fallbacks) added for elements in the 19-step recording
# These prefer readable text, ids or data-testid where available
# -----------------------------------------------------------------------------

${NEXT_BUTTON_TEXT}            xpath=//button[normalize-space()="Next"]
${SUBMIT_BUTTON_TEXT}          xpath=//button[normalize-space()="Submit"]
${GO_BUTTON_TEXT}              xpath=//button[normalize-space()="Go"]

# Prefer data-testid or explicit ids when available — already existing variables take precedence
# End of auto-added stable xpaths

