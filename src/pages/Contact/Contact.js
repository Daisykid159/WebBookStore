import { Container, Row, Col, Form, Button } from "react-bootstrap";
import styles from "./Contact.module.css";

function Contact() {
    return (
        <div className="main">
            <Container>
                <div className={styles.contactWrapper}>
                    <div>
                        <h2 className={styles.titleHeading}>Liên hệ với chúng tôi</h2>
                    </div>

                    <div className={`${styles.title} text-center`}>
                        <p>BookStore là một doanh nghiệp kỳ lân trong lĩnh vực thương mại điện tử về giáo dục, nổi tiếng với thương hiệu sản xuất và xuất bản sách thiếu nhi. BookStore được thành lập từ năm 2023 với sự kế thừa gần 6 năm kinh nghiệm khởi nghiệp kinh doanh của đội ngũ Co-Founder. Chúng tôi tự hào đồng hành cùng hàng ngàn bậc phụ huynh, giáo viên trên toàn quốc áp dụng phương pháp giáo dục đổi mới, góp phần xây dựng và phát triển năng lực cho thế hệ “mầm non” của đất nước.</p>
                    </div>

                    <Row>
                        <Col lg={6}>
                            <h4>Về chúng tôi</h4>
                            <p><strong>Địa chỉ:</strong>Chung cư Học viện Quốc Phòng, Nhà số 1, Khu liền kề, Đ. Võ Chí Công, Xuân La, Tây Hồ, Hà Nội</p>
                            <p><strong>Điện thoại:</strong> 0392.920.348</p>
                            <p><strong>Email:</strong>bookstore@gmail.com</p>
                            <p><strong>Website:</strong> BookStore.net</p>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.562633226973!2d105.7970790758728!3d21.05017918704141!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab5bade2c193%3A0x16c0b4280e3419a3!2zQ2h1bmcgY8awIEjhu41jIHZp4buHbiBxdeG7kWMgcGjDsm5nIC0gdGjDoXAgVMOieQ!5e0!3m2!1svi!2s!4v1715158493269!5m2!1svi!2s"
                                width="100%"
                                height="340"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                            ></iframe>
                        </Col>
                        <Col lg={6}>
                            <h4>Liên hệ tư vấn</h4>
                            <Form>
                                <Form.Group className="mb-3">
                                    <Form.Label>Họ và tên</Form.Label>
                                    <Form.Control type="text" placeholder="Nhập họ và tên" />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="Nhập email" />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Số điện thoại</Form.Label>
                                    <Form.Control type="text" placeholder="Nhập số điện thoại" />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Nội dung</Form.Label>
                                    <Form.Control as="textarea" rows={4} placeholder="Nhập nội dung liên hệ" />
                                </Form.Group>
                                <Button variant="primary" type="submit" className={'w-100'}>
                                    Gửi liên hệ
                                </Button>
                            </Form>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
}

export default Contact;
