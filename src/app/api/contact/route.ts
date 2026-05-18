import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { name, phone, email, message } = await req.json();

  if (!name || !phone) {
    return NextResponse.json({ error: "Ad ve telefon zorunludur." }, { status: 400 });
  }

  try {
    const nodemailer = await import("nodemailer");
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"ASB Hukuk Web" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_TO || "info@aybikesultanbicer.com",
      subject: `Yeni Bilgi Talebi — ${name}`,
      html: `
        <h2>Yeni İletişim Formu</h2>
        <p><strong>Ad Soyad:</strong> ${name}</p>
        <p><strong>Telefon:</strong> ${phone}</p>
        <p><strong>E-posta:</strong> ${email || "—"}</p>
        <p><strong>Mesaj:</strong><br/>${message || "—"}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Mail error:", err);
    return NextResponse.json({ error: "Mail gönderilemedi." }, { status: 500 });
  }
}
