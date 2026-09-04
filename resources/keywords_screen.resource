*** Settings ***
Library    SeleniumLibrary
*** Keywords ***
Input Client Onboarding Case Name
    [Arguments]    ${case_name}
    Wait Until Element Is Visible    ${CLIENT_ONBOARDING_CASE_NAME_INPUT}
    Input Text    ${CLIENT_ONBOARDING_CASE_NAME_INPUT}    ${case_name}

Select Client Onboarding Channel
    [Arguments]    ${value}
    Wait Until Element Is Visible    ${ONBOARDING_CHANNEL_DROPDOWN}
    Select From List By Value    ${ONBOARDING_CHANNEL_DROPDOWN}    ${value}

Choose Initiating User
    [Arguments]    ${user_name}
    Wait Until Element Is Visible    ${INITIATING_USER_INPUT}
    Click Element    ${INITIATING_USER_INPUT}
    Clear Element Text    ${INITIATING_USER_INPUT}
    Input Text    ${INITIATING_USER_INPUT}    ${user_name}
    ${option_xpath}=    Set Variable    xpath=//div[@role='listbox']//li[contains(normalize-space(.), '${user_name}') or contains(normalize-space(@title), '${user_name}') or contains(normalize-space(@value), '${user_name}')]
    ${is_option_visible}=    Run Keyword And Return Status    Wait Until Element Is Visible    ${option_xpath}    timeout=5s
    Run Keyword If    '${is_option_visible}' == 'True'    Click Element    ${option_xpath}
    ...    ELSE    Press Keys    ${INITIATING_USER_INPUT}    ENTER
    Mouse Over    ${CLIENT_ONBOARDING_MODAL_HEADER}
    Sleep    2s
    Click Element    ${CLIENT_ONBOARDING_MODAL_HEADER}
    Wait Until Element Is Visible    ${INITIATING_USER_INPUT}
    ${selected_value}=    Get Value    ${INITIATING_USER_INPUT}
    Log    Selected initiating user: ${selected_value}

Choose Customer
    [Arguments]    ${customer_name}
    Wait Until Element Is Visible    ${CUSTOMER_INPUT}
    Input Text    ${CUSTOMER_INPUT}    ${customer_name}
    Press Keys    ${CUSTOMER_INPUT}    ENTER

Toggle Consent Checkbox
    Wait Until Element Is Visible    ${CONSENT_CHECKBOX}
    Scroll Element Into View    ${CONSENT_CHECKBOX}
    Mouse Over    ${CONSENT_CHECKBOX}
    Sleep    1s
    Click Element    ${CONSENT_CHECKBOX}
    Sleep    1s
    Wait Until Element Is Visible    ${CONSENT_CHECKBOX}

Submit Client Onboarding Popup
    Wait Until Element Is Visible    ${NEXT_ACTION_BUTTON}
    Click Button    ${NEXT_ACTION_BUTTON}

Client Onboarding Popup Actions
    Wait Until Element Is Visible    ${CLIENT_ONBOARDING_MODAL_HEADER}
    Sleep    3s
    Input Client Onboarding Case Name    Test Client Onboarding
    Sleep    2s
    Select Client Onboarding Channel    Digital
    Sleep    2s
    Choose Initiating User    abhinav.n.mishra
    Sleep    5s
    Toggle Consent Checkbox
    Choose Customer    Hiroshi Tanaka
    Sleep    2s
    Capture Page Screenshot
    Submit Client Onboarding Popup