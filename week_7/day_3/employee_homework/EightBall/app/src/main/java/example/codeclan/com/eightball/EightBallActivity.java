package example.codeclan.com.eightball;

import android.content.Intent;
import android.net.Uri;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;

import org.w3c.dom.Text;

import java.io.InputStream;

public class EightBallActivity extends AppCompatActivity {

    EditText questionEditText;
    Button shakeButton;
    TextFileAnswers eightBall;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_eight_ball);

        questionEditText = (EditText) findViewById(R.id.question_edittext);
        shakeButton = (Button) findViewById(R.id.shake_btn);
        InputStream input = getResources().openRawResource(R.raw.answers);
        this.eightBall = new TextFileAnswers(input);

    }

    public void onShakeButtonClicked(View button) {
        String answer = eightBall.getAnswer();

        Intent intent = new Intent(EightBallActivity.this, AnswerActivity.class);
        intent.putExtra("answer", answer);

        startActivity(intent);

    }

    public void websiteButtonClicked(View button) {
        String url = "http://codeclan.com";
        Intent intent = new Intent(Intent.ACTION_VIEW);
        intent.setData(Uri.parse(url));

        startActivity(intent);
    }
}
