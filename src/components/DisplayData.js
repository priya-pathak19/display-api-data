import React, {useState, useEffect} from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';

const DisplayData = () => {

    const [apidata, setapiData] = useState([]);

    const getResponseFunc = async () => {
        fetch('https://reqres.in/api/users?page=2')
	    .then(( response) => {
	      return response.json();
	    })
	    .then((data) => {
	      const myData = data.data.map(person => {
	        return{
	          id : person.id,
              Firstname : person.first_name,
              email : person.email,
              Lastname : person.last_name,
	        };
	      });
	      setapiData(myData) ;
          console.log(myData)
	    })
        
    }

    useEffect(()=> {
        getResponseFunc()
    },[])

    const pagination = paginationFactory({
        sizePerPage: 4,
        
      });

    const columns = [
        {dataField : "id", text: "id"},
        {dataField : "Firstname", text: "First Name"},
        {dataField : "Lastname", text: "Last Name"},
        {dataField : "email", text: "Email"},
    ]



    return(
        <React.Fragment>
        
            <div>
            <BootstrapTable
                keyField="1" 
                data={apidata}  
                columns={columns}  
                pagination={pagination}
            /> 
            
            </div>
        
        </React.Fragment>
    )
}

export default DisplayData;