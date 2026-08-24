*** Settings ***
Library    SeleniumLibrary
Resource    ../test_data/credentials.resource

*** Variables ***
${USERNAME_FIELD}    xpath=//*[@id="txtUserID"]
${PASSWORD_FIELD}    xpath=//*[@id="txtPassword"]
${LOGIN_BUTTON}      xpath=//*[@id="sub"]
${HOME_TAB}          xpath=//*[@id="TABSPAN"]/span/span
${WORK_PORTAL}       xpath=/html/body/div[5]/header/div/div/div[1]/div[6]/span/a/i
${PORTAL_MENU_DROPDOWN}    xpath=//i[contains(@class, "pi-caret-down") and @data-menuid="pyNavigation1787290109773"]
