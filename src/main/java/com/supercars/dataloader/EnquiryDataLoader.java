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
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;
import com.supercars.Enquiry;

import com.supercars.logging.Logger;

/**
 * @author v023094
 *
 * TODO To change the template for this generated type comment go to Window -
 * Preferences - Java - Code Style - Code Templates
 */
public class EnquiryDataLoader {

    public static Enquiry getEnquiry(int enquiryId) {

        Enquiry enquiry = new Enquiry();
        try (Connection connection = Constants.getDBConnection()) {
            String sql = "SELECT ENQUIRY_ID, NAME, EMAIL, COMMENT, CAR_ID FROM ENQUIRIES WHERE ENQUIRY_ID = " + enquiryId;
            try (Statement statement = connection.createStatement(); ResultSet resultSet = statement.executeQuery(sql)) {
                resultSet.next();
                enquiry.setEnquiryId(resultSet.getInt("ENQUIRY_ID"));
                enquiry.setName(resultSet.getString("NAME"));
                enquiry.setEmail(resultSet.getString("EMAIL"));
                enquiry.setComment(resultSet.getString("COMMENT"));
                enquiry.setCarId(resultSet.getInt("carId"));
            }
            connection.close();
        } catch (Exception e) {
            Logger.log(e);
        }
        return enquiry;
    }

    public static List<Enquiry> getEnquirysForCar(int carId) {
        return getEnquirysForCar(carId, Integer.MAX_VALUE);
    }

    public static List<Enquiry> getEnquirysForCar(int carId, int limit) {
        List<Enquiry> enquiries = new ArrayList<Enquiry>();
        try (Connection connection = Constants.getDBConnection()) {
            String sql = "SELECT NAME, EMAIL, COMMENT FROM ENQUIRIES WHERE CAR_ID = " + carId;
            try (PreparedStatement psmt = connection.prepareStatement("SELECT NAME, EMAIL, COMMENT, SLEEP(?) FROM ENQUIRIES WHERE CAR_ID = ? LIMIT ?");) {
                int sleep = 0;
                if (limit > 100) {
                    sleep = 1;
                }
                psmt.setInt(1, sleep);
                psmt.setInt(2, carId);
                psmt.setInt(3, limit);
                ResultSet resultSet = psmt.executeQuery();
                while (resultSet.next()) {
                    Enquiry enquiry = new Enquiry();
                    enquiry.setName(resultSet.getString("NAME"));
                    enquiry.setEmail(resultSet.getString("EMAIL"));
                    enquiry.setComment(resultSet.getString("COMMENT"));
                    enquiries.add(enquiry);
                }
            }
            connection.close();
        } catch (Exception e) {
            Logger.log(e);
        }
        return enquiries;
    }
            
    public static void saveEnquiry(Enquiry enquiry) {
        try (Connection connection = Constants.getDBConnection()) {
            try (PreparedStatement pstmt = connection.prepareStatement("INSERT INTO ENQUIRIES (NAME, EMAIL, COMMENT, CAR_ID, DUMMY) SELECT ?,?,?,?, SLEEP(1)")) {
                pstmt.setString(1, enquiry.getName());
                pstmt.setString(2, enquiry.getEmail());
                pstmt.setString(3, enquiry.getComment());
                pstmt.setInt(4, enquiry.getCarId());
                pstmt.execute();
            }
            connection.close();
        } catch (Exception e) {
            Logger.log(e);
        }
    }
}
