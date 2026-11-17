class Sample{
String name ;
int roll;
String branch;
String college;

	public Sample (int roll , String name , String branch , String college){
		this.roll=roll;
		this.name=name;
		this.branch=branch;
		this.college=college;
	}

	public static void disp( Sample s){
		System.out.println("roll :"+s.roll);
		System.out.println("college :"+s.college);
		System.out.println("branch :"+s.branch);
		System.out.println("name :"+s.name);
	}


	public static void main(String args[]){

		Sample s1 = new Sample(55 , "Rajat", "CSE" , "ABES");
		Sample s2 = new Sample(001 , "Sharma", "ECE" , "ABES");
		disp(s1);
		disp(s2);
	}
}
 	