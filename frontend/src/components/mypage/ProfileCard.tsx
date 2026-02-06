import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User } from "lucide-react";
import { format } from "date-fns";
import { ko } from "date-fns/locale";

interface ProfileCardProps {
  name: string;
  nickname: string;
  email: string;
  createdAt: string;
}

export default function ProfileCard({
  name,
  nickname,
  email,
  createdAt,
}: ProfileCardProps) {
  const formatDate = (dateString: string) => {
    return format(new Date(dateString), "yyyy.MM.dd HH:mm", { locale: ko });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <User className="size-5" />
          프로필 정보
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <div className="text-muted-foreground mb-1 text-sm">이름</div>
          <div className="font-semibold">{name}</div>
        </div>
        <div>
          <div className="text-muted-foreground mb-1 text-sm">닉네임</div>
          <div className="font-semibold">{nickname}</div>
        </div>
        <div>
          <div className="text-muted-foreground mb-1 text-sm">이메일</div>
          <div className="font-semibold">{email}</div>
        </div>
        <div>
          <div className="text-muted-foreground mb-1 text-sm">가입일</div>
          <div className="text-sm">{formatDate(createdAt)}</div>
        </div>
      </CardContent>
    </Card>
  );
}
