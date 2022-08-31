from pydoc import doc
from token import EQUAL
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from configparser import ConfigParser

import time

config_object = ConfigParser()
config_object.read("config.ini")

backlinkerInfo = config_object["BACKLINKER"]

driver = webdriver.Chrome()
driver.get(backlinkerInfo["url"])
assert "Gainchanger Link Building Portal" in driver.title

email = backlinkerInfo["username"]
elem = driver.find_element(By.XPATH, "//input[@type='text']")
elem.clear()
elem.send_keys(email)

elem = driver.find_element(By.XPATH, "//input[@type='password']")
elem.clear()
elem.send_keys(backlinkerInfo["password"])

elem = driver.find_element(By.XPATH, "//*[@role='button']")
elem.click()

time.sleep(2.4)

elem = driver.find_element(By.CLASS_NAME, "toolbar-label")
welcometext = elem.text;


assert welcometext == "Welcome! "+ email, "Invalid Welcome text"

count=0
while (count==0):
    try:
        menuItems = driver.find_elements(By.CLASS_NAME,"dx-list-item");            
        count = len(menuItems)
        print(count);
    except:
        print("fail");

    time.sleep(0.5);    

for m in menuItems:
    print(m.text);    
    time.sleep(0.5);  

elem = driver.find_element(By.CLASS_NAME, "dx-icon-product")
elem.click();

time.sleep(2.5); 

ahrefs = driver.find_elements(By.XPATH, "//a[@href='#']")

ahrefs[0].click();
time.sleep(3); 

driver.close()