import axios from "axios";

const Reports = () => {
    const downloadReport = async (type) => {
        try {
            const res = await axios.get(`${process.env.REACT_APP_API_URL}/reports/${type}`, {
                responseType: "blob",
                withCredentials: true,
            });

            const url = window.URL.createObjectURL(new Blob([res.data]));
            const link = document.createElement("a");
            link.href = url;
            link.setAttribute("download", `report.${type}`);
            document.body.appendChild(link);
            link.click();
        } catch (err) {
            console.error("Error downloading report:", err);
        }
    };

    return (
        <div className="p-5">
            <h1 className="text-3xl">Download Reports</h1>
            <button className="bg-blue-500 text-white px-4 py-2" onClick={() => downloadReport("pdf")}>Download PDF</button>
            <button className="bg-green-500 text-white px-4 py-2 ml-2" onClick={() => downloadReport("csv")}>Download CSV</button>
        </div>
    );
};

export default Reports;
