*** Settings ***
Library    SeleniumLibrary
Resource    ../test_data/credentials.resource
Resource    ../resources/locators_elements.resource
Resource    ../resources/keywords_screen.resource

*** Variables ***
#${URL}    https://accenture70.pegalabs.io/prweb/app/default/beEBp4uRVTogorRwSwWqbOtn9IL2fwdI*/!STANDARD
#${USERNAME}    abhinav.n.mishra@accenture.com
#${PASSWORD}    rules@234


*** Test Cases ***
PegaLabs Load and Click
    [Documentation]    Login to application using credentials from test_data and verify home screen
    [Tags]    TC-001
    Open Browser    ${PEGA_URL_WORKPORTAL}   chrome
    Maximize Browser Window
    Input Text    ${USERNAME_FIELD}    ${USERNAME}
    Wait Until Element Is Visible    ${PASSWORD_FIELD}
    Input Text    ${PASSWORD_FIELD}    ${PASSWORD}
    Sleep    5s
    Click Element    ${LOGIN_BUTTON}
    Sleep    10s
    Wait Until Element Is Visible    ${ACCEPT_PRIVACY_BUTTON}
    Click Button    ${ACCEPT_PRIVACY_BUTTON}
    Sleep    3s

#   Start case creation
    Wait Until Element Is Visible    ${CREATE_BUTTON}
    Sleep    5s
    Click Button    ${CREATE_BUTTON}

#   Enter case details
    Sleep    2s
    Wait Until Element Is Visible   ${CASE_TITLE_INPUT}
    Sleep    5s
    Click Element    ${CASE_TITLE_INPUT}
    Sleep    3s

    Client Onboarding Popup Actions

