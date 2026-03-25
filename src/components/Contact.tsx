"use client";

import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    type: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // mailto fallback
    const subject = encodeURIComponent(`[onTrust お問い合わせ] ${form.type} - ${form.company}`);
    const body = encodeURIComponent(
      `お名前: ${form.name}\n会社名: ${form.company}\nメール: ${form.email}\nお問い合わせ種別: ${form.type}\n\n${form.message}`
    );
    window.location.href = `mailto:info@ontrust.co.jp?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section id="inquiry" className="py-24 px-6 bg-ink text-white">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-trust-400 text-sm font-semibold tracking-widest uppercase mb-3">Contact</p>
          <h2 className="font-serif-jp text-4xl font-bold text-white mb-4">
            お問い合わせ
          </h2>
          <p className="text-gray-400 text-base">
            パートナーシップ・技術連携・その他のご相談はこちらから。
          </p>
        </div>

        {submitted ? (
          <div className="bg-white/5 border border-white/10 rounded-2xl p-10 text-center">
            <div className="w-12 h-12 rounded-full bg-trust-500/15 border border-trust-400/20 flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-trust-600" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </div>
            <p className="font-semibold text-white text-lg mb-2">メーラーが開きました</p>
            <p className="text-gray-400 text-sm">送信後、担当者より折り返しご連絡いたします。</p>
            <button
              onClick={() => setSubmitted(false)}
              className="mt-6 text-trust-600 text-sm hover:underline"
            >
              もう一度入力する
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5 bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-white mb-1.5">お名前 <span className="text-red-400">*</span></label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="山田 太郎"
                  className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white text-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-trust-300 focus:border-transparent transition"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white mb-1.5">会社名 / 組織名</label>
                <input
                  type="text"
                  value={form.company}
                  onChange={(e) => setForm({ ...form, company: e.target.value })}
                  placeholder="株式会社〇〇"
                  className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white text-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-trust-300 focus:border-transparent transition"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-white mb-1.5">メールアドレス <span className="text-red-400">*</span></label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="hello@example.com"
                className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white text-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-trust-300 focus:border-transparent transition"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white mb-1.5">お問い合わせ種別 <span className="text-red-400">*</span></label>
              <select
                required
                value={form.type}
                onChange={(e) => setForm({ ...form, type: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white text-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-trust-300 focus:border-transparent transition"
              >
                <option value="">選択してください</option>
                <option value="パートナーシップ">パートナーシップについて</option>
                <option value="信頼スコア導入">信頼スコアの導入について</option>
                <option value="アプリ共同開発">アプリ共同開発について</option>
                <option value="API・技術連携">API・技術連携について</option>
                <option value="その他">その他</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-white mb-1.5">ご相談内容 <span className="text-red-400">*</span></label>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="ご相談内容をご記入ください"
                className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white text-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-trust-300 focus:border-transparent transition resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-trust-600 hover:bg-trust-700 text-white font-semibold py-4 rounded-full transition-colors text-base"
            >
              送信する
            </button>
            <p className="text-center text-xs text-gray-500">
              送信後、メーラーが開きます。まずはカジュアルなご相談も歓迎します。
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
