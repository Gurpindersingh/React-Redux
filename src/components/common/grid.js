import React, {PropTypes} from 'react';  
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
 class Gride extends React.Component {
    constructor(props){
        super(props);
       this.ExpandableRow = this.ExpandableRow.bind(this);
       this.expandComponent = this.expandComponent.bind(this);
  
     }

    ExpandableRow(row) {
    
 	if (row.id < 3) return true;	
 	else return false;	
 	}	
 	 	
 	expandComponent(row) {
 	return (	
     	<div>
    HI
    </div>
);	
 	}	 


    componentWillMount(){ 
        //End Checkbox 
            this._products = [{
        id: 1,
        name: "Product1",
        price: 120
    }, {
        id: 2,
        name: "Product2",
        price: 80
    },
    {
        id: 3,
        name: "Product2",
        price: 80
    },
    {
        id: 4,
        name: "Product2",
        price: 80
    },
    {
        id: 5,
        name: "Product2",
        price: 80
    },
    {
        id: 6,
        name: "Product2",
        price: 80
    },
    {
        id: 7,
        name: "Product2",
        price: 80
    },
    {
        id: 8,
        name: "Product2",
        price: 80
    },
    {
        id: 9,
        name: "Product2",
        price: 80
    },
    {
        id: 10,
        name: "Product2",
        price: 80
    },
    {
        id: 11,
        name: "Product2",
        price: 80
    },
    {
        id: 12,
        name: "Product2",
        price: 80
    }];
    }
    

  render() {
   //For checkbox

     this._selectRowProp = {
      mode: 'checkbox',
      clickToSelect: false,  // click to select, default is false
      clickToExpand: true  // click to expand row, default is false
    };
      
           return (
<BootstrapTable data={ this._products}   
     expandableRow={ this.ExpandableRow}	
 	expandComponent={ this.expandComponent }
    selectRow={ this._selectRowProp }>
      <TableHeaderColumn  dataField='id' isKey={ true }>Product ID</TableHeaderColumn>
      <TableHeaderColumn  dataField='name' expandable={ false }>Product Name</TableHeaderColumn>
      <TableHeaderColumn  dataField='price' expandable={ false }>Product Price</TableHeaderColumn>
  </BootstrapTable>
           )
  }
}
export default Gride;
