package usco.org;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;

/**
 * Servlet implementation class ServletProducto
 */
public class ServletProducto extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public ServletProducto() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		//response.getWriter().append("Served at: ").append(request.getContextPath());
		
		
		PrintWriter out = response.getWriter();
			
		Connection con1;
		Statement stm1;
		ResultSet rs1;
		String sql = "";
		
		String driver = "org.postgresql.Driver";
		String user = "web231";
		String password = "web231";
		String url = "jdbc:postgresql://localhost:5432/comercio231";
		
		try {
			Class.forName(driver);
			con1 = DriverManager.getConnection(url, user, password);
			stm1 = con1.createStatement();
			
			sql = "insert into producto (nombre, categoria, precio)";
			sql += " values('Guayos',2,150000)"; 
			int resultado = stm1.executeUpdate(sql);
			
			sql = "select * from producto";
			rs1 = stm1.executeQuery(sql);
			
			while(rs1.next()) {
				String nombre = rs1.getString("nombre");
				double precio = rs1.getDouble("precio");
				out.println("<p>" + nombre + ", " + precio + "</p>");	
			}
			
		}
		catch(Exception e) {
			System.out.println("Error" + e.toString());
		}
			
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		//doGet(request, response);
	}

}
