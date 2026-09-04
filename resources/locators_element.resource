*** Settings ***
Library    SeleniumLibrary
Resource    ../test_data/credentials.resource

*** Variables ***
# Login page elements
${USERNAME_FIELD}    xpath=//*[@id="txtUserID"]
${PASSWORD_FIELD}    xpath=//*[@id="txtPassword"]
${LOGIN_BUTTON}      xpath=//*[@id="sub"]

# App shell and case creation elements
${HOME_TAB}          xpath=//*[@id="TABSPAN"]/span/span
${WORK_PORTAL}       xpath=/html/body/div[5]/header/div/div/div[1]/div[6]/span/a/i
${PORTAL_MENU_DROPDOWN}    xpath=//i[contains(@class, "pi-caret-down") and @data-menuid="pyNavigation1787290109773"]
${CREATE_BUTTON}           xpath=//button[contains(.,'Create') or contains(.,'New')]
${CASE_LINK}              xpath=//button[@role='menuitem'][contains(.,'Client Onboarding')]
${MY_WORK}                xpath=//*[@name='My Work']
${CASE_TITLE_INPUT}       xpath=//li[@role='menuitem' and @aria-label='Client Onboarding']

# Client Onboarding modal elements
${CLIENT_ONBOARDING_MODAL_HEADER}       xpath=//div[@role='dialog']//h2[contains(.,'Create Client Onboarding')]
${MODAL_MINIMIZE_BUTTON}                xpath=//div[@role='dialog']//button[@aria-label='Minimize modal']
${MODAL_CLOSE_BUTTON}                   xpath=//div[@role='dialog']//button[@aria-label='Close modal']
${INITIATION_STEP_BUTTON}               xpath=//button[@id='ASSIGN-WORKLIST MYORG-CLMKYCCL_1-WORK C-37003!INITIATION_FLOW:AssignmentSF1']
${CAPTURE_CONSENT_STEP_BUTTON}          xpath=//button[@id='ASSIGN-WORKLIST MYORG-CLMKYCCL_1-WORK C-37003!INITIATION_FLOW:AssignmentSF2']
${CLIENT_ONBOARDING_CASE_NAME_INPUT}    xpath=//input[@data-testid='Client onboarding case name:input:control']
${ONBOARDING_CHANNEL_DROPDOWN}          xpath=//select[@data-testid='Onboarding channel:select:control']
${INITIATING_USER_INPUT}       xpath=//input[@data-testid='Initiating user:combo-box:control']
${INITIATING_USER_OPEN}        xpath=//div[@id='_ltlvkw3m7-combobox']//button[@aria-label='Open combobox list']
${CONSENT_CHECKBOX}            xpath=//input[@id='_ixkgw6p2f']
${CUSTOMER_INPUT}              xpath=//input[@data-testid='Customer:combo-box:control']
${CUSTOMER_OPEN}               xpath=//div[@id='_9vk6ugb0l-combobox']//button[@aria-label='Open combobox list']
${CANCEL_ACTION_BUTTON}                 xpath=//button[@data-testid=':assignment-action-buttons:cancel']
${FILL_FORM_WITH_AI_BUTTON}             xpath=//button[@data-testid=':assignment-action-buttons:fill-form-with-ai']
${NEXT_ACTION_BUTTON}                   xpath=//button[@data-testid=':assignment-action-buttons:submit' and @name='next']

${BROWSER}                 chrome
${URL}                     https://your-pega-url
${CASE_TYPE_NAME}          Client Onboarding
${CASE_TITLE}              Client Onboarding - Automated Test
${SUBMIT_BUTTON}           xpath=//button[contains(.,'Submit') or contains(.,'Create case') or contains(.,'Save')]
${CASE_SUMMARY_INPUT}      xpath=//textarea[contains(@name,'summary') or contains(@name,'description')]