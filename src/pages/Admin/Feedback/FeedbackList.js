import { useState, useEffect } from "react";
import styles from "./Feedback.module.css";

function FeedbackList() {
    const [feedbacks, setFeedbacks] = useState([]);

    useEffect(() => {
        // Giả lập dữ liệu phản hồi từ server
        const fetchData = async () => {
            const mockData = [
                { id: 1, name: "Nguyễn Văn A", email: "a@gmail.com", phone: "0123456789", message: "Dịch vụ rất tốt!", status: "Chưa xem" },
                { id: 2, name: "Trần Thị B", email: "b@gmail.com", phone: "0987654321", message: "Giao hàng nhanh!", status: "Đã xem" },
            ];
            setFeedbacks(mockData);
        };
        fetchData();
    }, []);

    return (
        <div className={styles.feedbackContainer}>
            <h2>Phản hồi khách hàng</h2>
            <table className={styles.feedbackTable}>
                <thead>
                <tr>
                    <th>Tên</th>
                    <th>Email</th>
                    <th>Số điện thoại</th>
                    <th>Nội dung</th>
                    <th>Trạng thái</th>
                </tr>
                </thead>
                <tbody>
                {feedbacks.map((feedback) => (
                    <tr key={feedback.id}>
                        <td>{feedback.name}</td>
                        <td>{feedback.email}</td>
                        <td>{feedback.phone}</td>
                        <td>{feedback.message}</td>
                        <td>{feedback.status}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default FeedbackList;