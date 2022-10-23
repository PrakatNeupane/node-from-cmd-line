SELECT * FROM broker;
SELECT * FROM customer;

SELECT  b.BrokerName, count(c.CustomerID) 
AS "Total Customer Count", c.BrokerID   
FROM Customer c 
INNER JOIN Broker b 
ON c.BrokerID = b.BrokerID 
GROUP BY (BrokerID) 
ORDER BY b.BrokerName; 