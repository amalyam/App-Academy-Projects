import math
import random

def chat():
     coworkers = ["Jack", "Lenny", "Michelle", "Andrea"]
     chatee = coworkers[int((random.random() * 4))]
     print(f"Chatting with {chatee} ...")
     print("Done")

def getWater():
    print("Getting water...")
    print("That was refreshing.")

def useSocialMedia():
    socialMedia = ["FaceBook", "Twitter", "YouTube", "Reddit"]
    choice = socialMedia[int((random.random() * 4))]
    print(f"Using {choice} ...")
    print("Done")
    
