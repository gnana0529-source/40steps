import { useState } from "react";

export default function BigSaleForm() {
  const [form, setForm] = useState({
    store: "",
    category: "",
    address: "",
    owner: "",
    phone: "",
    content: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    console.log(form);

    alert("신청이 완료되었습니다.");

    // 여기에 API 연동
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 flex items-center justify-center">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-6 space-y-4">
        <h1 className="text-2xl font-bold text-center">Big Sale 참여 신청</h1>

        <p className="text-sm text-gray-500 text-center">
          모바일에서 바로 작성하는 신청 폼입니다
        </p>

        <input
          name="store"
          value={form.store}
          onChange={handleChange}
          className="w-full border rounded-xl p-3"
          placeholder="상호명"
        />

        <input
          name="category"
          value={form.category}
          onChange={handleChange}
          className="w-full border rounded-xl p-3"
          placeholder="업종"
        />

        <input
          name="address"
          value={form.address}
          onChange={handleChange}
          className="w-full border rounded-xl p-3"
          placeholder="주소"
        />

        <input
          name="owner"
          value={form.owner}
          onChange={handleChange}
          className="w-full border rounded-xl p-3"
          placeholder="대표자 성명"
        />

        <input
          name="phone"
          value={form.phone}
          onChange={handleChange}
          className="w-full border rounded-xl p-3"
          placeholder="연락처"
        />

        <textarea
          name="content"
          value={form.content}
          onChange={handleChange}
          className="w-full border rounded-xl p-3"
          placeholder="행사 내용"
          rows={4}
        />

        <button
          onClick={handleSubmit}
          className="w-full bg-black text-white rounded-xl p-3 hover:opacity-90 transition"
        >
          제출하기
        </button>

        <button className="w-full bg-yellow-400 rounded-xl p-3 font-semibold hover:brightness-95 transition">
          카카오톡 공유하기
        </button>
      </div>
    </div>
  );
}
