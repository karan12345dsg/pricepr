from  flask import Flask,request,jsonify
import  main2

app=Flask(__name__)

@app.route('/hello')
def hello():
	return 'Hello'
@app.route('/get_city_names',methods=['GET'])
def  get_city_names():
    response=jsonify({
        'city':main2.get_city_names()
    })
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response

@app.route('/get_Fuel',methods=['GET'])
def  get_Fuel():
    response=jsonify({
        'Fuel': main2.get_fuel()
    })
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response

@app.route('/get_Transmission',methods=['GET'])
def  get_Transmission():
    response=jsonify({
        'Transmission':main2.get_Transmission()
    })
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response
@app.route('/get_Engine',methods=['GET'])
def  get_Engine():
    response=jsonify({
        'Engine':main2.get_engine()
    })
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response
@app.route('/get_Company',methods=['GET'])
def  get_Company():
    response=jsonify({
        'Company':main2.get_comapny()
    })
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response
@app.route('/get_power',methods=['GET'])
def  get_power():
    response=jsonify({
        'Power':main2.get_power()
    })
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response
@app.route('/predict_car_price', methods=['GET', 'POST'])
def predict_car_price():
    Year = int(request.form['Year'])
    Kilometers_Driven = int(request.form['Kilometers_Driven'])
    Owner_Type=int(request.form['Owner_Type'])
    Seats=float(request.form['Seats'])
    Mileage=float(request.form['Mileage'])
    Engine=float(request.form['Engine'])
    Power=float(request.form['Power'])
    city = request.form['city']
    fuel = request.form['fuel']
    transmission = request.form['transmission']

    response = jsonify({
        'estimated_price':main2.predict_price(Year,Kilometers_Driven,Owner_Type,Seats,Mileage,Engine,Power,city,fuel,transmission)
    })
    response.headers.add('Access-Control-Allow-Origin', '*')

    return response

if __name__ == "__main__":
    main2.get_values()
    main2.load_chartvlaues()
    app.run(debug=True)