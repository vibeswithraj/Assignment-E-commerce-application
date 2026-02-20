import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { getRefreshToken, setAuthCookies } from "@/lib/auth";

export async function POST() {
  try {
    const refreshToken = await getRefreshToken();

    if (!refreshToken) {
      return NextResponse.json({ message: "No refresh token" }, { status: 401 });
    }

    const response = await fetch(`${process.env.DUMMYJSON_BASE_URL}/auth/refresh`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        refreshToken,
        expiresInMins: 60,
      }),
    });

    if (!response.ok) {
      return NextResponse.json({ message: "Token refresh failed" }, { status: 401 });
    }

    const data = await response.json();
    const cookieStore = await cookies();
    setAuthCookies(cookieStore, data.accessToken, data.refreshToken);

    return NextResponse.json({ message: "Token refreshed" }, { status: 200 });
  } catch (error) {
    console.error("Refresh token error:", error);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}
