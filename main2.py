import pickle
import  json
import  numpy as np
import sklearn

city=None
fuel=None
Transmission=None
model=None
columns=None
engine=None
power=None
company=None

def predict_price(Year, Kilometers_Driven, Owner_Type, Seat, Mileage, Engine, Power, City, Fuel, Transmission):
    try:
        loc_index = columns.index(City.lower())
    except:
        loc_index=-1
    try:
        loc_index1 = columns.index(Fuel.lower())
    except:
        loc_index1 = -1
    try:
        loc_index2 = columns.index(Transmission.lower())
    except:
        loc_index2 = -1


    x = np.zeros(len(columns))
    x[0] = Year
    x[1] = Kilometers_Driven
    x[2] = Owner_Type
    x[3] = Seat
    x[4] = Mileage
    x[5] = Engine
    x[6] = Power
    if loc_index >= 0:
        x[loc_index] = 1
    if loc_index1 >= 0:
        x[loc_index1] = 1
    if loc_index2 >= 0:
        x[loc_index2] = 1

    return round( model.predict([x])[0],2)

def get_values():
    global  city
    global fuel
    global  Transmission
    global columns
    with open('./columns.json',"r") as fread:
        columns=json.load(fread)['data_columns']
        city=columns[7:18]
        fuel=columns[18:22]
        Transmission=columns[22:24]

    global  model
    if model is None:
        with open("./car.pickle",'rb') as fread:
            model=pickle.load(fread)
    print("loading done")
def load_chartvlaues():
    global  engine
    global  power
    global  company
    with open('./Data.json',"r") as fread:
        columns=json.load(fread)['data_columns']
        engine=columns['Engine']
        power=columns['power']
        company=columns['company']

def get_engine():
    return engine

def get_power():
    return power

def get_city_names():
    return city

def get_fuel():
    return fuel

def get_comapny():
    return company
def get_Transmission():
    return  Transmission

if __name__=='__main__':
    get_values()
    load_chartvlaues()
    print(get_city_names())
    print(get_fuel())
    print(get_Transmission())
    print(predict_price(2010,7200,1,5,26.6,998,58.16,"Mumbai","CNG","Manual"))





