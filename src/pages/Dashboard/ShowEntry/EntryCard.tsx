import { toast } from "react-toastify";
import { instance } from "../../../instance";

interface EntryType {
    productName: string,
    salesmanName: String,
    purchasingPrice: Number,
    sellingPrice: Number,
    salesCharges: Number,
    quantity: Number,
    totalSalesCharges: Number,
    totalPurchasingPrice: Number,
    totalSellingPrice: Number,
    totalProfit: Number,
    createdAt: Date,
    _id: string,
}

interface EntryProps {
    data: EntryType;
    reqFunc: () => void;
}
const EntryCard: React.FC<EntryProps>  = ({data, reqFunc}) => {
    async function handlDelete () {
        try {
          const response = await instance.post("/api/entry/delete", {
            id: data._id
          });
          console.log(response)  
          if(response) {
            reqFunc();
            toast.success("One Entry has been deleted")
          }
        } catch (error) {
            
        }
    }
    return (
        <div className="min-h-[4rem] bg-dBlack my-3 mx-4 rounded-md p-3">
            <table className="border-2 border-primary font-primary w-full">
                <tbody>
                <tr className="w-full">
                    <td className="border-2 border-primary w-1/2 p-2 text-primary">Product Name</td>
                    <td className="border-2 border-primary w-1/2 p-2 text-primary">{data.productName}</td>
                </tr>
                <tr className="w-full">
                    <td className="border-2 border-primary w-1/2 p-2 text-primary">Salesman</td>
                    <td className="border-2 border-primary w-1/2 p-2 text-primary">{data.salesmanName}</td>
                </tr>
                <tr className="w-full">
                    <td className="border-2 border-primary w-1/2 p-2 text-primary">Purchasing Price</td>
                    <td className="border-2 border-primary w-1/2 p-2 text-primary">{data.purchasingPrice.toString()}</td>
                </tr>
                <tr className="w-full">
                    <td className="border-2 border-primary w-1/2 p-2 text-primary">Selling Price</td>
                    <td className="border-2 border-primary w-1/2 p-2 text-primary">{data.sellingPrice.toString()}</td>
                </tr>
                <tr className="w-full">
                    <td className="border-2 border-primary w-1/2 p-2 text-primary">Sales Charges</td>
                    <td className="border-2 border-primary w-1/2 p-2 text-primary">{data.salesCharges.toString()}</td>
                </tr>
                <tr className="w-full">
                    <td className="border-2 border-primary w-1/2 p-2 text-primary">Selling Quantity</td>
                    <td className="border-2 border-primary w-1/2 p-2 text-primary">{data.quantity.toString()}</td>
                </tr>
                <tr className="w-full">
                    <td className="border-2 border-primary w-1/2 p-2 text-primary">Total Sales Charges</td>
                    <td className="border-2 border-primary w-1/2 p-2 text-primary">{data.totalSalesCharges.toString()}</td>
                </tr>
                <tr className="w-full">
                    <td className="border-2 border-primary w-1/2 p-2 text-primary">Total Purchasing Charges</td>
                    <td className="border-2 border-primary w-1/2 p-2 text-primary">{data.totalPurchasingPrice.toString()}</td>
                </tr>
                <tr className="w-full">
                    <td className="border-2 border-primary w-1/2 p-2 text-primary">Total Selling Charges</td>
                    <td className="border-2 border-primary w-1/2 p-2 text-primary">{data.totalSellingPrice.toString()}</td>
                </tr>
                <tr className="w-full">
                    <td className="border-2 border-primary w-1/2 p-2 text-primary">Total Profit/Loss</td>
                    <td className="border-2 border-primary w-1/2 p-2 text-primary">{data.totalProfit.toString()}</td>
                </tr>
                <tr className="w-full">
                    <td className="border-2 border-primary w-1/2 p-2 text-primary">Created At</td>
                    <td className="border-2 border-primary w-1/2 p-2 text-primary">{new Date(data.createdAt).toString()}</td>
                </tr>
                </tbody>
            </table>
            <button className="px-4 py-1 text-red-700 border-2 border-red-700 rounded-md my-3 hover:bg-red-700 hover:text-primary font-primary transition-all" onClick={handlDelete}>Delete</button>
        </div>
    )
}
export default EntryCard;