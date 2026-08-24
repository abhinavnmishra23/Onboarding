*** Settings ***
Library    SeleniumLibrary
Resource    ../test_data/credentials.resource
Resource    ../resources/locators_element.resource

*** Variables ***
${URL}    https://accenture70.pegalabs.io/prweb/app/default/beEBp4uRVTogorRwSwWqbOtn9IL2fwdI*/!STANDARD
${USERNAME}    abhinav.n.mishra@accenture.com
${PASSWORD}    rules@234

*** Test Cases ***
PegaLabs Load and Click
    [Documentation]    Login to application using credentials from test_data and verify home screen
#    [Tags]    TC-001
#    Open Browser    https://accenture70.pegalabs.io/prweb/app/default/beEBp4uRVTogorRwSwWqbOtn9IL2fwdI*/!STANDARD    chrome
    Open Browser    https://accenture70.pegalabs.io/prweb/app/clmkyc--client-onboarding-for-financial-services-2?portal=WebPortal   chrome
    Maximize Browser Window
#    Log    Using credentials: ${USERNAME}
    Input Text    ${USERNAME_FIELD}    ${USERNAME}
    Wait Until Element Is Visible    ${PASSWORD_FIELD}
    Input Text    ${PASSWORD_FIELD}    ${PASSWORD}
    Sleep    5s
    Click Element    ${LOGIN_BUTTON}
    Sleep    20s