/*
 * Created on 31-May-2005
 *
 * TODO To change the template for this generated file go to
 * Window - Preferences - Java - Code Style - Code Templates
 */
package com.supercars.dataloader;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import com.supercars.Car;
import com.supercars.Engine;
import com.supercars.XMLException;
import com.supercars.logging.Logger;
import java.util.logging.Level;

/**
 * @author v023094
 *
 * TODO To change the template for this generated type comment go to Window -
 * Preferences - Java - Code Style - Code Templates
 */
public class CarDataLoader {

    public static void saveCar(Car car) {
        try (Connection connection = Constants.getDBConnection()) {
            PreparedStatement pstmt = connection.prepareStatement("INSERT INTO CARS(NAME, MODEL, DESCRIPTION, MANUFACTURER_ID, COLOUR, YEAR, PRICE, SUMMARY, PHOTO) SELECT ?, ?, ?, ?, ?, ?, ?, ?, 0");
            pstmt.setString(1, car.getName());
            pstmt.setString(2, car.getModel());
            pstmt.setString(3, car.getDescription());
            pstmt.setInt(4, car.getManufacturerId());
            pstmt.setString(5, car.getColour());
            pstmt.setInt(6, car.getYear());
            pstmt.setFloat(7, car.getPrice());
            pstmt.setString(8, car.getSummary());
            pstmt.execute();
            pstmt.close();
            connection.close();
            throw new XMLException("XML Example Exception Thrown");
        } catch (SQLException | XMLException e) {
            Logger.log(e);
        }
    }

    public static Car getCar(int carId) {

        Car car = new Car();
        Engine engine = new Engine();
        try (Connection connection = Constants.getDBConnection()) {
            String sql = "SELECT CARS.CAR_ID, NAME, MODEL, SUMMARY, DESCRIPTION, MANUFACTURER_ID, COLOUR, YEAR, PRICE, PHOTO";
            sql += " FROM CARS WHERE CARS.CAR_ID = " + carId;

            try ( //connection = Constants.getDBConnection();
                    Statement statement = connection.createStatement()) {
                ResultSet resultSet = statement.executeQuery(sql);
                resultSet.next();
                // Create Car Object
                car.setCarId(resultSet.getInt("CAR_ID"));
                car.setName(resultSet.getString("NAME"));
                car.setModel(resultSet.getString("MODEL"));
                car.setSummary(resultSet.getString("SUMMARY"));
                car.setDescription(resultSet.getString("DESCRIPTION"));
                car.setManufacturerId(Integer.parseInt(resultSet.getString("MANUFACTURER_ID")));
                car.setColour(resultSet.getString("COLOUR"));
                car.setYear(resultSet.getInt("YEAR"));
                car.setPrice(resultSet.getInt("PRICE"));
                car.setPhoto(resultSet.getString("PHOTO"));
                car.setManufacturer(new ManufacturerDataLoader().getManufacturer(car.getManufacturerId()));

                resultSet.close();
            }
        } catch (Exception e) {
            Logger.log(e);
        }

        return car;
    }

    public static List<Car> getCarsByManufacturer(int manufacturerId) {
        return getCarsByManufacturer(manufacturerId, Integer.MAX_VALUE);
    }

    public static List<Car> getCarsByManufacturer(int manufacturerId, int limit) {

        List<Car> cars = new ArrayList<Car>();
        // Get Car IDs
        try (Connection connection = Constants.getDBConnection()) {
            try (PreparedStatement psmt = connection.prepareStatement("SELECT CAR_ID FROM CARS WHERE MANUFACTURER_ID = ? LIMIT ?")) {
                psmt.setInt(1, manufacturerId);
                psmt.setInt(2, limit);
                try (ResultSet resultSet = psmt.executeQuery()) {
                    while (resultSet.next()) {
                        Car car = new Car();
                        car.setCarId(resultSet.getInt("CAR_ID"));
                        cars.add(car);
                    }
                }
            }
            connection.close();
        } catch (Exception ex) {
            Logger.log(ex);
        }

        // Get data for each car
        for (Car car : cars) {
            try (Connection connection = Constants.getDBConnection()) {
                PreparedStatement psmt = connection.prepareStatement("SELECT CAR_ID, NAME, MODEL, SUMMARY, DESCRIPTION, PRICE, PHOTO FROM CARS WHERE CAR_ID = ?");
                psmt.setInt(1, car.getCarId());
                ResultSet resultSet = psmt.executeQuery();
                if (resultSet.next()) {
                    car.setName(resultSet.getString("NAME"));
                    car.setModel(resultSet.getString("MODEL"));
                    car.setSummary(resultSet.getString("SUMMARY"));
                    car.setDescription(resultSet.getString("DESCRIPTION"));
                    car.setPrice(resultSet.getInt("PRICE"));
                    car.setPhoto(resultSet.getString("PHOTO"));
                }
                connection.close();
            } catch (SQLException ex) {
                Logger.log(ex);
            }
        }
        return cars;
    }

    public static List<Car> getCarsBySearch(String query) {

        List cars = new ArrayList();
        Car car;
        try (Connection connection = Constants.getDBConnection()) {
            String sql = "SELECT CAR_ID, C.NAME, MODEL, SUMMARY, DESCRIPTION, PRICE, PHOTO, M.MANUFACTURER_ID FROM CARS C, MANUFACTURER M WHERE C.MANUFACTURER_ID = M.MANUFACTURER_ID AND (C.NAME LIKE '%" + query + "%' OR C.MODEL LIKE '%" + query + "%' OR M.NAME LIKE '%" + query + "%')";

            try (Statement statement = connection.createStatement()) {
                ResultSet resultSet = statement.executeQuery(sql);
                while (resultSet.next()) {
                    car = new Car();
                    car.setCarId(resultSet.getInt("CAR_ID"));
                    car.setName(resultSet.getString("NAME"));
                    car.setModel(resultSet.getString("MODEL"));
                    car.setSummary(resultSet.getString("SUMMARY"));
                    car.setDescription(resultSet.getString("DESCRIPTION"));
                    car.setPrice(resultSet.getInt("PRICE"));
                    car.setPhoto(resultSet.getString("PHOTO"));
                    car.setManufacturerId(Integer.parseInt(resultSet.getString("MANUFACTURER_ID")));
                    car.setManufacturer(new ManufacturerDataLoader().getManufacturer(car.getManufacturerId()));
                    cars.add(car);
                }
                resultSet.close();
            }
            connection.close();
        } catch (Exception e) {
            Logger.log(e);
        }

        return cars;
    }
}
